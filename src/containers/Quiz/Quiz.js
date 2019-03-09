import React from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
class Quiz extends React.Component{
    state = {
        activeQuestion:0,
        answerState:null,
        quiz:[
            {
                question: 'Which colour is sky?',
                rightAnswerId: 2,
                id:1,
                answers:[
                    {text: 'Red', id:1},
                    {text: 'Blue', id:2},
                    {text: 'Green', id:3},
                    {text: 'Black', id:4},
                ]
            },
            {
                question: 'Who are you?',
                rightAnswerId: 1,
                id:2,
                answers:[
                    {text: 'Indian', id:1},
                    {text: 'Bag', id:2},
                    {text: 'Deadpool', id:3},
                    {text: 'FreezeMan', id:4},
                ]
            },
        ],
    };

    onAnswerClickHandler = (answerId)=>{
        const question = this.state.quiz[this.state.activeQuestion];
        if(question.rightAnswerId===answerId) {
            this.setState({
                answerState: {[answerId]:'success'}
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)

        }else {
            this.setState({
                answerState: {[answerId]:'error'}
            });
        }
    };

    isQuizFinished(){
        return this.state.activeQuestion+1===this.state.quiz.length
    }
    render() {
        return(
            <div className="Quiz">
                <div className='QuizWrapper'>
                    <h1>Quiz</h1>

                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.quiz.length}
                        activeNumber = {this.state.activeQuestion+1}
                        state = {this.state.answerState}
                    />
                </div>
            </div>
        )
    }

}

export default Quiz