import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback-options/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

// ===============================================================

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateStateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateStateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render({ good, neutral, bad } = this.state) {

    //===========================================================
    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () =>
      Math.round((good * 100) / countTotalFeedback());
    // ==========================================================

    return (
      <>

        <Section title="Please leave feedback">

          <FeedbackOptions
            options={{
              good: 'Good',
              neutral: 'Neutral',
              bad: 'Bad',
            }}
            onLeaveFeedback={{
              good: this.updateStateGood,
              neutral: this.updateStateNeutral,
              bad: this.updateStateBad,
            }}
          />

{/* --------------------------------------------------------------- */}

          {countTotalFeedback() > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}

          {countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}

        </Section>

        <GlobalStyle />
      </>
    );
  }
}
