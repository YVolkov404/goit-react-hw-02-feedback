import styled from 'styled-components';

export const Container = styled.section`
  width: 508px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 30px auto 0 auto;
  padding: 30px 20px;
  background-color: black;
  border: 8px inset blanchedalmond;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 42px;
  color: blanchedalmond;
  text-align: center;
  font-variant: small-caps;
  text-shadow: 2px -2px 2px rgba(255, 235, 205, 0.64);
`;
