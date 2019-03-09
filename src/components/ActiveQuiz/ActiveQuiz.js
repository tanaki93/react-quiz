import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'
const ActiveQuiz =(props)=>{
    return (
        <div className='ActiveQuiz'>
            <p className='Question'>
                <span>
                    <strong>{props.activeNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>
                    {props.activeNumber} из {props.quizLength}
                </small>
            </p>
            <ul>
                <AnswersList
                    state = {props.state}
                    answers = {props.answers}
                    onAnswerClick = {props.onAnswerClick}
                />
            </ul>
        </div>
    )
}

export default ActiveQuiz