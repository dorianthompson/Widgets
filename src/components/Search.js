import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('I RUN WITH EVERY RENDER');

    useEffect(() => {
        console.log('I RUN AT EVERY RENDER AND AT INITIAL RENDER');
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value = {term}
                        onChange= {(event) => setTerm(event.target.value)}
                        className='input'
                    />
                </div>
            </div>
        </div>

    );
};

export default Search;