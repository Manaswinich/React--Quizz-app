import React, { useState } from 'react';

//usgae of hooks is done instead of writing class and using props

const QuestionBox = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div classname="question">{question}</div>
            {answer.map((text, index) => (
                <button key={index} className="answerBtn"
                    onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}>
                    {text}
                </button>
            ))}
        </div>
    );
};


export default QuestionBox;