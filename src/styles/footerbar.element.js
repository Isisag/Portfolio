import styled from "styled-components";

export const Footer = styled.div`
  padding: 1rem 4rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #6e37bf;
  color: white;

  a:visited{
    color: white;
  }

  svg {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    fill: red;
    transition: all 0.3s ease-in-out;
  }
`;
