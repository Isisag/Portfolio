import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  img {
    width: 40vh;
  }

  .section-title {
    width: 100%;
    font-size: 5vh;
    text-transform: uppercase;
    font-weight: 700;
  }

  .about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
    margin: 1rem auto;

    .dowload {
      background-color: transparent;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      border: solid 5px #6d4ffc;
      text-decoration: none;
      color: #6d4ffc;
      text-transform: uppercase;
    }

    .about-text {
      text-align: right;
      margin: auto 0rem;
      padding: 2rem;
      font-size: 1em;

      h3 {
        font-weight: bold;
        font-weight: 0.8em;
      }
      p {
        margin: 0.8rem auto;
      }

      .margin {
        margin-bottom: 2rem;
      }

      .icons-home {
        display: flex;
        justify-content: end;

        svg {
          font-size: 2rem;
          margin: 0rem 1rem;
        }
      }
    }

    .about-info {
      text-align: left;
      padding: 2rem;
      font-size: 1.2em;
      margin: auto 0rem;

      svg {
        width: 1rem;
        margin: 0rem 1rem;
      }

      p {
        display: flex;
        align-items: center;
        font-weight: bold;
        margin: 0.9rem auto;
      }
    }

    img {
      margin: 0rem auto;
    }
  }

  // ICONS - Skills

  .icons {
    display: grid;

    .icon-group {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      padding: 1rem;
      margin: 0rem auto;

      .icon-individual {
        display: flex;
        align-items: center;
        flex-direction: column;
        /* flex-direction: row; */
        margin: 1rem;

        svg {
          width: 8vh;
          height: 8vh;
          margin: 1em;
        }

        p {
          font-weight: bolder;
        }
      }

      progress {
        width: 90%;
        height: 0.5rem;
        margin: 0.5rem auto;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.cardsBgc};
      }

      progress::-webkit-progress-bar {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.bgc_invert};
      }
      progress::-webkit-progress-value {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.cardsBgc};
      }

      progress::-moz-progress-bar {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.bgc_invert};
      }
    }
  }

  // PROJECTS

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3vh;
    padding: 2rem;

    .projects-cards {
      position: relative;
      transition: ease-in-out 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      h4 {
        width: 100%;
        bottom: 0;
        top: 0;
        position: absolute;
        padding: 3rem 0rem;
        transition: ease-in-out 0.3s;
        opacity: 0;
        font-size: 30px;

        p {
          font-weight: 600;
          color: white;
          font-size: 0.9rem;
          margin: 0.3rem;
        }

        &:hover {
          text-align: center;
          font-weight: 700;
          opacity: 1;
          color: white;
          background-color: rgba(126, 90, 255, 0.8);
        }
      }

      a {
        text-decoration: none;
        color: white;
      }

      a:visited {
        color: white;
      }

      img {
        object-fit: cover;
        width: 250px;
        height: 250px;
      }
    }
  }

  // CONTACTO

  .contact {
    display: grid;
    padding: 2rem 0rem;
    grid-template-columns: repeat(4, 1fr);

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
    }

    svg {
      width: 8rem;
    }

    .contact-individual {
      padding: 2rem 3rem;
      margin: 0rem 1rem;
      background-color: ${({ theme }) => theme.bgc2};
      -webkit-box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.88);
      -moz-box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.88);
      box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.88);
      transition: all 0.3s ease-in;

      &:hover {
        transform: scale(1.1);
      }

      p {
        font-weight: bolder;
      }
    }
  }

  @media (max-width: 450px) {
    width: fit-content;
    padding: 1rem 0rem;
    margin: 0rem auto;

    .about {
      grid-template-columns: repeat(1, 1fr);

      .about-text {
        text-align: center;

        .icons-home {
          justify-content: center;
        }
      }

      .about-info {
        text-align: center;
      }
    }

    .icons {
      display: grid;
      grid-template-columns: 1fr;

      .icon-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-content: center;

        .icon-individual {
          margin: 0rem 0.5rem;
        }
      }
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      .projects-cards {
        img {
          width: 300px;
          height: 300px;
        }
      }
    }

    .contact {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      a {
        text-decoration: none;
        color: white;
      }

      svg {
        width: 8rem;
      }

      .contact-individual {
        padding: 2rem 3rem;
        margin: 0.5rem auto;
      }
    }
  }
`;
