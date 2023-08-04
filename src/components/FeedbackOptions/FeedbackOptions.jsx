import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <div className={css.container}>
    {options.map(option => {
      return <button className={css.button} key={option} type="button" onClick={onLeaveFeedback}>{option}</button>
    })}
  </div>
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};


