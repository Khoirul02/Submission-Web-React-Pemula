import React from 'react';
import NoteItemBody from './NoteItemBody';
 
function NoteItem({id, title, body, archived, onDelete, onUpdate }) {
 return (
     <div className="container">
         <NoteItemBody id={id} title={title} description={body} status={archived} onDelete={onDelete} onUpdate={onUpdate} />
   </div>
 );
}
 
export default NoteItem;