import React, { useEffect, useState } from 'react'
import { useApiAnimeData } from '../../Hook/getAPIData';
import AnimeCard from '../../Components/AnimeCard/AnimeCard'
import Popup from '../../Components/Popup/Popup';
import './AnimePage.css'

function AnimePage() {

    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitado, setAnimeDigitado] = useState("one punch");
    const { animeData, loading, error } = useApiAnimeData(animeName);

    const [popupContent, setPopupContent] = useState({message:'',color:''});
    const [showPopup, setShowPopup] = useState(false);

    function showAndHidePopup(message, color) {
        setPopupContent({ message, color });
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3500)
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                showAndHidePopup(`Error: ${error}`,`warning`);
            } else {
                showAndHidePopup(`Animes coletados com sucesso`,`success`);
            }
        }
    },[loading,error,animeData])




    const hadleInputChange = (e) => {
        setAnimeDigitado(e.target.value);

    };

    function BuscarOAnime() {
        setAnimeName(animeDigitado);
    }

    return (
        <div className='form-anime'>
            <input type="text" placeholder='Coloque o nome do anime' value={animeDigitado} onChange={hadleInputChange}></input>
            <button onClick={() => BuscarOAnime()}> Pesquisar </button>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {Array.isArray(animeData) ? (
                <div>
                    {animeData.map((a) => (
                        <AnimeCard key={a.mal_id}{...a}/>
                    ))}
                </div>
            ) : (animeData && <div> Sem nenhum anime</div>)}

            {showPopup ? (<Popup message={popupContent.message} color={popupContent.color} />): null}
            
        </div>
    )
}

export default AnimePage;