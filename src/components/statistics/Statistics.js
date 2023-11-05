import { InfoWrapper, SubTitle, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <InfoWrapper>
      <SubTitle>Statistics</SubTitle>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive^Feed: %''{positivePercentage}</Text>
    </InfoWrapper>
  );
};
