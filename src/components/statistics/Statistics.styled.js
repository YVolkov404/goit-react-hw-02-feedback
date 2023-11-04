import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: calc((100% - 40px) / 2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-variant-caps: small-caps;
  color: blanchedalmond;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

export const Text = styled.p`
  margin: 0;
  color: blanchedalmond;
  font-size: 18px;
  text-align-last: justify;
  font-variant-caps: small-caps;
  letter-spacing: 1.2px;
  text-decoration: underline;
  text-decoration-color: aqua;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  line-height: 1.1;
`;
