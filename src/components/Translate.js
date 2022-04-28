import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLangauge] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(event) => setText(event.target.value)}/>
                </div>
            </div>
            <Dropdown 
                label= 'Select a Language'
                options={options} 
                selected={language}
                onSelectedChange={setLangauge}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;