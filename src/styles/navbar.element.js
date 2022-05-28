import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  margin: 0px;
  height: 2rem;
  color: ${({ theme }) => theme.bgc};

  div {
    text-transform: uppercase;
    font-size: medium;
    text-align: center;
    font-weight: bold;
  }

  .nav-link {
    font-weight: 600;
    margin: 0rem 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.navContent};
    transition: all 0.5s ease-in-out;

    &:hover {
      font-size: 2.3vh;
      color: ${({ theme }) => theme.hoverText};
    }

    svg {
      width: 20px;
    }
  }

  .bars {
    display: none;
  }

  @media (max-width: 450px) {
    position: relative;

    .bars {
      display: block;
    }

    .opacity {
      opacity: 1;
    }

    .switch {
      display: block;
    }

    .menuClose {
      display: none;
      animation: menuAnimationClose 0.3s ease;

      @keyframes menuAnimationClose {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
        }
      }
    }

    .menuOpen {
      background-color: rgba(126, 90, 255, 0.9);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 0.5fr);
      position: absolute;
      width: 70%;
      top: 0;
      left: 0;
      padding: 3rem 1rem;
      margin: 4rem 0rem;
      height: fit-content;
      z-index: 6;
      text-align: left;
      animation: menuAnimationOpen 0.3s ease-in-out;

      @keyframes menuAnimationOpen {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      a {
        padding: 1rem 0rem;
        font-size: 1.5em;
        color: "#e1daeb";
      }
    }
  }
`;
