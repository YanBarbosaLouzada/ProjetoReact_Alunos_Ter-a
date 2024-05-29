import React, { useContext } from 'react'
import { NoteContext } from '../../Context/NotesContext'
import Note from '../Note/Note'
import './AllNotes.css'

function AllNotes() {
    const { notes } = useContext(NoteContext);
    return (
        <div className='AllNotes'>
            {notes.map((n) => (
                <Note key={n.id}{...n}/>
            ))}
        </div>
    )
}

export default AllNotes