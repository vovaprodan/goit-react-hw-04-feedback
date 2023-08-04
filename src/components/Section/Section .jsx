import  { useState } from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import css from './Section.module.css';

const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelOnButtonClick = (evt) => {
    if (evt.target.textContent === 'good') {

      setGood(good + 1 )
    }
    if (evt.target.textContent === 'neutral') {
     setNeutral(neutral + 1 )
    }
    if (evt.target.textContent === 'bad') {
     setBad(bad + 1 )
    }
  }
 
  const totalPositive = () => {
    const total = good + neutral + bad;
    return total
  }
  const countPositiveFeedbackPercentage = () => {
    const positive = good * 100 / totalPositive()
    return positive 
  }

    
    
        return  <section className={css.section}>
          <h1>Please leave feedback</h1>
          <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={handelOnButtonClick}></FeedbackOptions>
         
          <h2>Statistics</h2>
          {totalPositive() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalPositive()} positivePercentage={Math.round(countPositiveFeedbackPercentage())}></Statistics>) :
            (<Notification message="There is no feedback"></Notification>)
          }
          
          
</section>
    }
export default Section;