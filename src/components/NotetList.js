import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete , onUpdate }) {
    return (
        notes.length !== 0 ?
             notes.map((note) => (
                 <div key={note.id} className="item">
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} onUpdate={onUpdate} {...note} />
                 </div>
             ))
            : <>
                <div className="box-empty">
                    <h3>Tidak Ada Catatan</h3>
                </div> 
            </>
    );
}
 
export default NoteList;
