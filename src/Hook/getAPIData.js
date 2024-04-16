import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApiAnimeData(anime) {
    const [animeData, setAnimeData] = useState(null);
    const [loading, setLoading] = useState(true); // Corrected typo
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const searchInput = anime.toLowerCase();
                const formattedSearchInput = searchInput.replace(/\s+/g, "");
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearchInput}`);
                if (response.status === 200) {
                    setAnimeData(response.data.data);
                } else {
                    setError("Erro ao encontrar anime");
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [anime]); // Dependency array ensures function runs when 'anime' changes

    return { animeData, loading, error };
}

