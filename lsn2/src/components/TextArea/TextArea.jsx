import { useState} from 'react';
import r from './TextArea.module.css'

function TextArea(props) {
    const [value, setValue] = useState('');

    const targetValue = (event) => {
        setValue(event.target.value);
    }

    const userMessage = () => {
        let Mymessage = {
                author: "I'm",
                text: value,
            };
        props.gluing(Mymessage);
        setValue('');
    }

    const PressEntr = (event) => {
        if(event.code === "Enter") {
            userMessage();
        };
    }

    return (
        <div>
            <textarea className={r.textarea} type="text" value={value} onChange={targetValue} onKeyDown={PressEntr}/>
            <button className = {r.button} type="button" onClick={userMessage}>Отправить</button>
        </div>
    )
}

export default TextArea