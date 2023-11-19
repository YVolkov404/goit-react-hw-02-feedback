import styled from 'styled-components';

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
  text-transform: capitalize;
  color: black;
  background-color: blanchedalmond;
  border: none;
  box-shadow: 4px -4px 4px -1px rgba(255, 235, 205, 0.64);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: none;
    color: darkcyan;
  }
`;
