import styled from "styled-components";

export const ContainerDiv = styled.div`
  background-color: ${(props) => props.theme.bgc};
  color: ${({ theme }) => theme.text};
  /* height: 100vh; */
  height: fit-content;
  width: 100%;

  svg {
    color: ${(props) => props.theme.hover};
    font-size: 2rem;
  }
  svg &:hover {
    color: ${(props) => props.theme.hover};
  }

  .gradient {
    background: linear-gradient(249deg, #5c2cf1, #7e5aff, #2d50bd, #e26ae3);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 14s ease infinite;
    -moz-animation: AnimationName 14s ease infinite;
    -o-animation: AnimationName 14s ease infinite;
    animation: AnimationName 14s ease infinite;

    @keyframes AnimationName {
      0% {
        background-position: 0% 63%;
      }
      50% {
        background-position: 100% 38%;
      }
      100% {
        background-position: 0% 63%;
      }
    }
    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 63%;
      }
      50% {
        background-position: 100% 38%;
      }
      100% {
        background-position: 0% 63%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 63%;
      }
      50% {
        background-position: 100% 38%;
      }
      100% {
        background-position: 0% 63%;
      }
    }
    @-o-keyframes AnimationName {
      0% {
        background-position: 0% 63%;
      }
      50% {
        background-position: 100% 38%;
      }
      100% {
        background-position: 0% 63%;
      }
    }
  }

  @media(max-width: 450px) {
    width: fit-content;
  }
`;

export const ButtonBG = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.text};
    font-size: 1.5rem;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* place-content: center; */
  position: relative;
  height: 70%;
  padding: 3rem 0rem;

  .bgc {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: opacity(90%);
    z-index: 1;
    height: 100%;
  }

  h2 {
    margin: 0rem 0rem 0rem 2rem;
    z-index: 1;
    font-size: 8vh;
  }

  @media(max-width: 450px) {
    /* width: 50%; */
    height: 30%;

    .bgc {
    width: 100%;
  }

  h2 {
    text-align: center;
    z-index: 1;
    font-size: 5vh;
    width: 100%;
  }
  }
`;

export const PrincipalTitle = styled.h1`
  font-weight: 700;
  font-size: 15vh;
  margin: 0rem 0rem 0rem 2rem;
  text-align: start;
  z-index: 1;
  color: white;
  width: 100%;

  @media(max-width: 450px) {
   font-size: 11vh;

   margin: 0rem;
   padding: 0rem .3rem;
  }
`;
