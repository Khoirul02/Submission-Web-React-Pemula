import React from 'react';
 
class FormulirNote extends React.Component {
    constructor(props) {
        super(props);
        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            max : 10
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        const max = 10;
        if (this.state.max !== 0) {
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            });
            this.setState(() => {
                return {
                    max: max - (event.target.value).length
                };
            });   
        } else {
            this.setState(() => {
                return {
                    title: '',
                }
            });
            this.setState(() => {
                return {
                    max: max
                };
            });
        }
    }
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
              body: event.target.value,
            }
        });
    }
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render() {
        return (
            <div className="container-input">
                <form onSubmit={this.onSubmitEventHandler}>
                    <div className="input">
                       <label>Judul ( Sisa Karakter : {this.state.max}) </label>
                       <input type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} />    
                    </div>
                    <div className="input">
                       <label>Deskripsi</label>
                       <textarea type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} />    
                    </div>
                    <button type="submit">Simpan</button>
                </form>
            </div>
        );   
    }
}
 
export default FormulirNote;