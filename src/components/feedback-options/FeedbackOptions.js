import { BtnWrapper, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <Btn onClick={onLeaveFeedback.good}>{options.good}</Btn>
      <Btn onClick={onLeaveFeedback.neutral}>{options.neutral}</Btn>
      <Btn onClick={onLeaveFeedback.bad}>{options.bad}</Btn>
    </BtnWrapper>
  );
};
