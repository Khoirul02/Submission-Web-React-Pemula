/* eslint-disable react/style-prop-object */
import React from 'react';
import Img from './../utils/cover.png'
function NoteItemBody({ id, title, description, status, onDelete, onUpdate }) {
    return (
     <><div className="box-tentang">
         <img className="center-produk" src={Img} alt="Cover" />
         <button id="button-delete" onClick={()=> onDelete(id)}>Hapus</button>
         <button id="button-move" onClick={()=> onUpdate(id,status)}>{status === true ? 'Batal Arsipkan' : 'Arsipkan'}</button>
      </div>
         <div className="box-deskripsi">
             <h4>Informasi</h4>
             <p className="box-deskripsi__item">
                 Judul : {title} <br/>
                 Deskripsi : {description} <br />
              </p> 
         </div></>
 );
}
 
export default NoteItemBody;