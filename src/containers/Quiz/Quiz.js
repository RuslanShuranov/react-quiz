import React, {Component} from 'react';
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    activeQuestionNumber: 0,
    answers: '',
    quiz: [
      {
        id: 1,
        question: 'Who is the Patron Saint of Spain?',
        rightAnswerId: 1,
        answers: [
          {id: 1, text: 'St James'},
          {id: 2, text: 'St John'},
          {id: 3, text: 'St Benedict'}
        ]
      },
      {
        id: 2,
        question: 'Which of these means a speech in a play where a character talks to themselves rather than to other characters?',
        rightAnswerId: 2,
        answers: [
          {id: 1, text: 'Interlude'},
          {id: 2, text: 'Revue'},
          {id: 3, text: 'Soliloquy'}
        ]
      },
      {
        id: 3,
        question: 'In the Vicar of Dibley, what was the name of the vicar\'s clueless friend?',
        rightAnswerId: 2,
        answers: [
          {id: 1, text: 'Beatrice'},
          {id: 2, text: 'Charlotte'},
          {id: 3, text: 'Alice'}
        ]
      },
      {
        id: 4,
        question: 'Casterly Rock is the ancestral home of which family in Game of Thrones?',
        rightAnswerId: 1,
        answers: [
          {id: 1, text: 'The Starks'},
          {id: 2, text: 'The Tully\'s'},
          {id: 3, text: 'The Lannisters'}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestionNumber];
    if (question.rightAnswerId === answerId) {
      this.setState({
        answers: {[answerId]: 'success'}
      });
      const timeout = window.setTimeout(() => {
        console.log(this.isQuizFinished())
        if (this.isQuizFinished()) {
          console.log('finished')
        } else {
          this.setState({
            activeQuestionNumber: this.state.activeQuestionNumber + 1,
            answers: ''
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answers: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestionNumber + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer on the above question</h1>
          <ActiveQuiz
            onAnswerClick={this.onAnswerClickHandler}
            answers={this.state.quiz[this.state.activeQuestionNumber].answers}
            question={this.state.quiz[this.state.activeQuestionNumber].question}
            quizLength={this.state.quiz.length}
            questionNumber={this.state.activeQuestionNumber + 1}
            userAnswers={this.state.answers}/>
        </div>
      </div>
    )
  }
}
