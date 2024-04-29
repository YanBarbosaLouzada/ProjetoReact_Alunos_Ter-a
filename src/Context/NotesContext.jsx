import React, { createContext, useState } from 'react';
import { mockNotes } from '../Mock/mockNotes';
import { generateAtualDate } from '../Helpers/generateAtualDate';
import { generateRandomId } from '../Helpers/generateRandomId';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([...mockNotes]);

    const addNote = (description, title) => {
        setNotes([
            ...notes,
            { id: generateRandomId(), description, title, date: generateAtualDate() },
        ]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export { NoteProvider, NoteContext };