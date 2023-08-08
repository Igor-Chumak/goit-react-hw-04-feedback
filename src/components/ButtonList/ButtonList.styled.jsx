import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(7)};
`;

export const Button = styled.button`
  color: white;
  font-weight: 600;
  min-width: ${props => props.theme.spacing(25)};
  padding: 5px;
  border-radius: 20px;
  /* border: 1px solid black; */

  &:hover {
    border-radius: 40px;
    transform: scale(1.1);
  }
`;
