import React from 'react'
import { NoteProvider } from '../../Context/NotesContext'
import "./NotesPage.css"
import FormNote from '../../Components/FormNote/FormNote'
import AllNotes from '../../Components/AllNotes/AllNotes'
function NotesPage() {
    return ( //dizendo que essa pagina vai usar um dos componentes que esta usando o notecontext
        <NoteProvider> 
            <div className='notesPageContainer'> 
                <FormNote></FormNote>
                <AllNotes></AllNotes>
            </div>
        </NoteProvider>
    )
}

export default NotesPage;