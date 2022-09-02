import React from 'react';
 
function SearchNote({ onSearch }) {

    function handleChange(event) {
        onSearch(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="container-input">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <input type="text" onChange={handleChange} />    
                </div>
            </form>
        </div>
    );
}
 
export default SearchNote;