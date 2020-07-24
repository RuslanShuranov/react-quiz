import React from 'react';
import classes from './AnswerItem.module.scss'

const AnswerItem = props => {
  const questionResultClasses = [classes.AnswerItem];
  if (props.userAnswer) {
    questionResultClasses.push(classes[props.userAnswer]);
  }

  return (
    <li
    onClick={() => props.onAnswerClick(props.answer.id)}
      className={questionResultClasses.join(' ')}>
      {props.answer.text}
    </li>
  );
}

export default AnswerItem;
