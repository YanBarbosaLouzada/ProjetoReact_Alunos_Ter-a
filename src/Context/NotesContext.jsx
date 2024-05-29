import React, { createContext, useState } from 'react';
import { mockNotes } from '../Mock/mockNotes';
import { generateAtualDate } from '../Helpers/generateAtualDate';
import { generateRandomId } from '../Helpers/generateRandomId';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([...mockNotes]);

    const [note, setNote] = useState({ title: "", description: "" });
    const [isEditing, setEditing] = useState(false);
    const [idEdit, setIdEdit] = useState("");

    const editNote = (id) => {
        setNotes(
            notes.map((n) => {
                if (n.id === id) {
                    return { ...note, id: id, date: generateAtualDate() };
                } else {
                    return n;
                }
            })
        )
    }


    const addNote = (title, description) => {
        setNotes([
            ...notes,
            { id: generateRandomId(), title, description, date: generateAtualDate() },
        ]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, note, setNote, isEditing, setEditing, idEdit, setIdEdit, editNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export { NoteProvider, NoteContext };