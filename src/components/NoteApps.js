import React from 'react';
import NotetList from './NotetList';
import FormulirNote from './FormulirNote';
import { getInitialData } from './../utils/';
import SearchNote from './SearchNote'; 
import Footer from './Footer';
class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onUpdateHandler = this.onUpdateHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const note = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes : note });   
    }
    onSearchHandler(keyword) {
        if (keyword !== '') {
            const note = this.state.notes.filter(note => note.title.includes(keyword))
            this.setState({ notes : note });
        } else {
            const note = getInitialData()
            this.setState({ notes : note });
        }
    }
    onUpdateHandler(id, archived){
        const data = this.state.notes;
            for (var i in data) {
                if (data[i].id === id) {
                    data[i].archived = archived === true ? false : true;
                break;
            }
        }
        this.setState({notes : data})
    }
    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
              notes: [
                ...prevState.notes,
                {
                    id: this.state.notes.length + 1,
                    title,
                    body,
                    createdAt: + new Date(),
                    archived : false,
                }
              ]
            }
          });
    }
    render() {
        return (
            <div className="content">
                <h1>My Personal Note</h1>
                <h2 className="container">Masukan Data Catatan</h2>
                <div className="content-gep" />
                <FormulirNote addNote={this.onAddNoteHandler}/>
                <div className="content-gep" />
                <h2 className="container">Pencarian Catatan</h2>
                <div className="content-gep" />
                <SearchNote onSearch={this.onSearchHandler} />
                <div className="content-gep" />
                <h2 className="container">Daftar Catatan</h2>
                <div className="content-gep" />
                <NotetList notes={this.state.notes.filter(note => note.archived === false)} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateHandler} />
                <h2 className="container">Daftar Arsip</h2>
                <div className="content-gep" />
                <NotetList notes={this.state.notes.filter(note => note.archived === true)} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateHandler}/>
                <Footer />
            </div>
        );
    }
}
 
export default NoteApp;