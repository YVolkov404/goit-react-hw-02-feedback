import { Component } from 'react';
import {
  Container,
  Title,
  BtnWrapper,
  Btn,
  InfoWrapper,
  SubTitle,
  Text,
  Notify,
} from './App.styled';

// =======================================================================

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <Btn onClick={onLeaveFeedback.good}>{options.good}</Btn>
      <Btn onClick={onLeaveFeedback.neutral}>{options.neutral}</Btn>
      <Btn onClick={onLeaveFeedback.bad}>{options.bad}</Btn>
    </BtnWrapper>
  );
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <InfoWrapper>
      <SubTitle>Statistics</SubTitle>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive Feed: _[%] {positivePercentage}</Text>
    </InfoWrapper>
  );
};

// =====================================================================

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

  options = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  onLeaveFeedback = {
    good: this.updateStateGood,
    neutral: this.updateStateNeutral,
    bad: this.updateStateBad,
  };

  // =======================================================================

  render() {
    let item = this.state;

    const countTotalFeedback = () => {
      return item.good + item.neutral + item.bad;
    };

    const countPositiveFeedbackPercentage = () => {
      return Math.round((item.good * 100) / countTotalFeedback());
    };

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {countTotalFeedback() > 0 && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}

        {this.state.good + this.state.neutral + this.state.bad === 0 && (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
