import { BtnWrapper, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => (
        <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </BtnWrapper>
  );
};
