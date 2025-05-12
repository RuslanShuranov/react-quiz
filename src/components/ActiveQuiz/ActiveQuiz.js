import React from "react";
import classes from "./ActiveQuiz.module.scss"
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.questionNumber}. </strong>{props.question}
      </span>
      <small className={classes.Counter}>{props.questionNumber} of {props.quizLength}</small>
    </p>
    <AnswersList
      userAnswers={props.userAnswers}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}/>
  </div>
)

export default ActiveQuiz
