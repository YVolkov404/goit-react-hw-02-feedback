import { BtnWrapper, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <Btn type='button' onClick={onLeaveFeedback.good}>{options.good}</Btn>
      <Btn type='button' onClick={onLeaveFeedback.neutral}>{options.neutral}</Btn>
      <Btn type='button' onClick={onLeaveFeedback.bad}>{options.bad}</Btn>
    </BtnWrapper>
  );
};
