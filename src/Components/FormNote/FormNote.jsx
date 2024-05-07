import React, { useContext, useState } from 'react'
import { NoteContext } from '../../Context/NotesContext'
import './FormNote.css'
function FormNote() {
    const [noteCreated, setNoteCreated] = useState({ title: "", description: "" }); // Começa o formulario vazio
    const { addNote } = useContext(NoteContext); // chamando função que criamos no NoteContext

    const SendNote = (e) => {  //criando função para salvar a nova nota 
        e.preventDefault(); // falando para nao atualizar a pagina quando clicar pra salvar a nota  
        addNote(noteCreated.title, noteCreated.description); // adicinando a nova nota
    }

    return (
        <aside className='aside-notes'>
            <form id='formNote' onSubmit={SendNote}>
                <label htmlFor='titleNote' className='margin-form'>{""} Título </label>
                <input type='text' value={noteCreated.title} onChange={(e) => setNoteCreated({ ...noteCreated, title: e.target.value })} id='titleNote' placeholder='Titulo'></input>

                <label htmlFor='descriptionNote' className='margin-form'>{""} Descrição </label>
                <input type='text' value={noteCreated.description} onChange={(e) => setNoteCreated({ ...noteCreated, description: e.target.value })} id='descriptionNote' placeholder='Descrição'></input>
                
                <button type='submit' id="buttonForm" className='margin-form'> Salvar Anotação </button>
            </form>
        </aside>
    )
}

export default FormNote 