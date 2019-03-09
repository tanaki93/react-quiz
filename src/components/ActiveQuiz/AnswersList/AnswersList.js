import React from 'react'
import './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'
const AnswersList = (props) =>{
    return(
        <ul className='AnswersList'>
            {props.answers.map((answer, index)=> {
                return(
                    <AnswerItem
                        state = {props.state?props.state[answer.id]:null}
                        onAnswerClick = {props.onAnswerClick}
                        key = {index}
                        answer = {answer} />
                )
            })}
        </ul>
    )
}
export default AnswersList