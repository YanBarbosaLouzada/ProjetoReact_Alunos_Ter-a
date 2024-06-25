import React, { useEffect, useState } from 'react'
import { useApiAnimeData } from '../../Hook/getAPIData';
import AnimeCard from '../../Components/AnimeCard/AnimeCard'
import Popup from '../../Components/Popup/Popup';
import './AnimePage.css'

function AnimePage() {
    const [animeName, setAnimeName] = useState("One Punch Man");
    const [animeDigitado, setAnimeDigitado] = useState("One Punch Man");
    const { animeData, loading, error } = useApiAnimeData(animeName);
    // lidando com popup
    const [popupContent, setPopupContent] = useState({ message: '', color: '' })
    const [showPopup, setShowPopup] = useState(false);

    //criando a função que chama o popup

    function showAndHidePopup(message, color) {
        setPopupContent({ message, color }); //vamos descobrir depois qual vai ser o contexto do popup
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3500)
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                showAndHidePopup(`Error: ${error}`, 'warning');
            } else {
                showAndHidePopup('Animes coletados com sucesso', 'success');
            }
        }
    }, [loading, error, animeData]);


    const handleInputChange = (e) => {
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnime() {
        setAnimeName(animeDigitado);
    }

    return (
        <div>
            <div className="search-box">
                <input type="text" placeholder="Enter anime name" value={animeDigitado} onChange={handleInputChange} className="search-input"/>
                <button onClick={() => BuscarOAnime()} className="search-icon">Pesquisar</button>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {Array.isArray(animeData) ? (
                <div className='anime-cards'>
                    {animeData.map((a) => (
                        <AnimeCard key={a.mal_id}{...a}></AnimeCard>))}
                </div>
            ) : (animeData && <div> Sem Nenhum anime </div>)}
            {
                showPopup ? <Popup message={popupContent.message} color={popupContent.color} /> : null
                // showPopup = true ? <mostre o popup> ou nao mostre nada se ele for falso
            }
        </div>
    );
}

export default AnimePage;