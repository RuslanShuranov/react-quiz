import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => {
      return <AnswerItem
        key={index}
        answer={answer}
        userAnswer={props.userAnswers ? props.userAnswers[answer.id] : null}
        onAnswerClick={props.onAnswerClick}/>
    })}
  </ul>
);

export default AnswersList;
