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
    color: #e1daeb;
    transition: all 0.5s ease-in-out;

    &:hover {
      font-size: 2.3vh;
      color: ${({ theme }) => theme.hoverText};
    }

    svg {
      width: 20px;
    }
  }

  .bars{
    display: none;
  }

  @media(max-width: 450px) {
    justify-content: space-between;

    .bars{
    display: block;
    }

    .nav-link {
    display: none;
  }

  }


`;
