import React, { Component } from 'react';

import {survey as api} from '../../services/api';

import styles from './styles.module.scss';

import questions from '../../data/questions.json'

import Question from './components/Question'


class Survey extends Component {
  state = {
     answers: []
  };

  handleSubmit = async e => {
    const { answers } = this.state;
    await api({ answers });
  };

  render() {
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <h1>Survey</h1>
        {questions.map(question => (
                <label htmlFor="email">{question.text}</label> // here i'd follow the Question component with type text parameters
        ))}
      </form>
    );
  }
}

export default Survey;