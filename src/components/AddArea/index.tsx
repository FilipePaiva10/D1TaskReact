import React, { useState, KeyboardEvent} from "react";

import * as addArea from './styled';

type props = {
    onEnter: (taskName: string) => void;
}

export default ({ onEnter }: props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <addArea.Container>
            <div className="Image">+</div>
            <input
                type="text"
                placeholder="Digite sua tarefa"
                onChange={e => setInputText(e.target.value)}
                value={inputText}
                onKeyUp={handleKeyUp}
            />
        </addArea.Container>
    )
}