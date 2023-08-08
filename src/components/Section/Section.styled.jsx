import styled from 'styled-components';

export const SectionBox = styled.section`
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing(7)};
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.1em;
`;
