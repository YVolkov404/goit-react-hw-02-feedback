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

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    //===========================================================
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    const positive = this.countPositiveFeedbackPercentage();
    // ==========================================================

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {/* --------------------------------------------------------------- */}

          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          )}

          {total === 0 && <Notification message="There is no feedback" />}
        </Section>

        <GlobalStyle />
      </>
    );
  }
}
