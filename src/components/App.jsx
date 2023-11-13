import { Component } from 'react';
import FeedBackOptions from './FeedbackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    

    handleClickButton = e => {
    const option = e.target.name;

    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((positiveFeedback / totalFeedback) * 100);
    }
    return `${result}%`;

    }
    

     

    render() {
      const options = Object.keys(this.state);
    const handleClickButton = this.handleClickButton;
      const { good, neutral, bad } = this.state;
      const countTotalFeedback = this.countTotalFeedback();
      const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        return (
          <div>
            <div className={css.container}>
              <Section title="Please leave feedback">
              <FeedBackOptions
              options={options}
              onLeaveFeedback={handleClickButton} />
            </Section>
            
            <Section title="Statistics">
            {countTotalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
              </div>
            </div>
        
    );
        }
}
