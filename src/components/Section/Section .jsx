import React, { Component } from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import css from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    positivePercentage: 0, 
  };
    static propTypes = {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,    
    };

state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
 


  handelOnButtonClick = (evt) => {
    if (evt.target.textContent === 'good') {
      this.setState(prevState => {
    return  {good: prevState.good + 1 }
    })
    }
    if (evt.target.textContent === 'neutral') {
      this.setState(prevState => {
    return  {neutral: prevState.neutral + 1 }
    })
    }
    if (evt.target.textContent === 'bad') {
      this.setState(prevState => {
    return  {bad: prevState.bad + 1 }
    })
    }
  
    
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = good * 100 / total
        return  <section className={css.section}>
          <h1>Please leave feedback</h1>
          <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.handelOnButtonClick}></FeedbackOptions>
         
          <h2>Statistics</h2>
          {total > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={Math.round(positive)}></Statistics>) :
            (<Notification message="There is no feedback"></Notification>)
          }
          
          
</section>
    }
}
export default Section;