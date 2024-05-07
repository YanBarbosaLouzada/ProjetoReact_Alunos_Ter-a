import React from 'react'
import { NoteProvider } from '../../Context/NotesContext'
import "./NotesPage.css"
import FormNote from '../../Components/FormNote/FormNote'
function NotesPage() {
    return ( //dizendo que essa pagina vai usar um dos componentes que esta usando o notecontext
        <NoteProvider> 
            <div className='notesPageContainer'> 
                <FormNote></FormNote>   
            </div>
        </NoteProvider>
    )
}

export default NotesPage