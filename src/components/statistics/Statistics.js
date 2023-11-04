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
      <Text label="Neutral">Neutral: {neutral}</Text>
      <Text label="Bad">Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive^Feed: %''{positivePercentage}</Text>
    </InfoWrapper>
  );
};
