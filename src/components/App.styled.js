import styled from 'styled-components';

export const Container = styled.section`
  width: 500px;
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
  border: 5px solid blanchedalmond;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 34px;
  color: blanchedalmond;
  text-align: center;
  font-variant: small-caps;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
`;

export const Btn = styled.button`
  padding: 15px 55px;
  font-weight: 700;
  font-size: 24px;
  color: black;
  background-color: blanchedalmond;
  border: none;
`;

export const InfoWrapper = styled.div`
  width: calc((100% - 40px) / 2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  color: blanchedalmond;
`;

export const Text = styled.p`
  margin: 0;
  color: blanchedalmond;
  font-size: 18px;
  text-align-last: justify;
`;

export const Notify = styled.p`
  width: calc((100% - 40px) / 2);
  margin: 0;
  color: blanchedalmond;
  font-size: 20px;
  font-weight: 700;
  font-variant-caps: all-small-caps;
`;
