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
        0%{background-position:0% 63%}
        50%{background-position:100% 38%}
        100%{background-position:0% 63%}
    }
@-webkit-keyframes AnimationName {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
}

`;

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
    grid-template-columns: repeat(3,1fr);
    place-content: center;
    margin: 1rem auto;

    .about-text{

    text-align: right;
    margin: auto 0rem;
    padding: 2rem;
    font-size: 1em;
  
    h3 {
      font-weight: bold;
      font-weight: .8em;
    }
    p {
      margin: 0.6rem auto;
    }
  }

  .about-info{
    text-align: left;
    padding: 2rem;
    font-size: 1.2em;
    margin: auto 0rem;

    svg{
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
    /* filter: grayscale(1); */
  }
  }

  .icons {
    display: grid;

    /* display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center; */

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

      progress{
      width: 90%;
      height: .5rem;
      margin: .5rem auto;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.cardsBgc};
  }

  progress::-webkit-progress-bar{
    border-radius: 10px;
    background-color: ${({ theme }) => theme.bgc_invert};
  }
  progress::-webkit-progress-value{
      border-radius: 10px;
      background-color: ${({ theme }) => theme.cardsBgc};
    }
    
    progress::-moz-progress-bar{
      border-radius: 10px;
      background-color: ${({ theme }) => theme.bgc_invert};
  }
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3vh;
    padding: 2rem;
    
    .projects-cards {
      /* background-color: ${({ theme }) => theme.cardsBgc}; */
      /* width: 1fr; */
      position: relative;
      transition: ease-in-out .3s;

      &:hover{
        transform: scale(1.1);
      }
        
      h4{
        width: 100%;
        bottom: 0;
        top: 0;
        position: absolute;
        padding: 3rem 0rem;
        transition: ease-in-out .3s;
        opacity: 0;
        font-size: 30px;

        p{
          font-weight: 600;
          color: white;
          font-size: .9rem;
          margin:.3rem;
        }
        
        &:hover{
          text-align: center;
          font-weight: 700;
          opacity: 1;
          color: white;
          background-color: rgba(126, 90, 255, .8);
      }
      } 
      
      a{
        text-decoration: none;
        color: white;
      }

      a:visited{
        color: white;
      }

      img{
        object-fit: cover;
        width:230px;
        height:230px;
      }
    }

    
  }

  .contact{
    display: grid;
    grid-template-columns: repeat(4, 1fr);    
 
    a{
        text-decoration: none;
        color: white;
    }

    svg{
      width: 8rem;
    }

  .contact-individual{
    padding: 2rem 3rem;
    margin: 0rem 1rem;
    
    &:hover{
      background-color: ${({ theme }) => theme.bgc2};
    }
  }

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

  .bgc{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: opacity(70%);
    z-index: 1;
    height: 100%;
    /* background-size: cover; */
  }
 
  h2 {
    margin: 0rem 0rem 0rem 2rem;
    z-index: 1;
    font-size: 8vh;
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
`;

export const Navbar = styled.div`
  padding: 1rem 4rem;
  margin: 0px;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #6e37bf; */
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
  }
`;

export const Footer = styled.div`
  padding: 1rem 4rem;
  /* margin: 4.8rem 0rem; */
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #6e37bf;

  svg {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    fill: red;
    transition: all 0.3s ease-in-out;
  }

`;

const LightTheme = {
  text: "#8364b3",
  hover: "#6e37bf",
  hoverText: "#411780",
  bgc: "#e1daeb",
  bgc_invert: "#212121",
  bgc2: "#c7c0d1",
  cardsBgc: "#7e5aff",
};
const DarkTheme = {
  text: "#e1daeb",
  hover: "#8364b3",
  hoverText: "#411780",
  bgc: "#212121",
  bgc_invert: "#e1daeb",
  bgc2: "#363434",
  cardsBgc: "#6d4ffc",
};

const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export default Themes;

// .hero-image{
//   background-image: var(--hero-image-home);
//   background-size:cover;
//   background-position:center;
//   background-repeat: no-repeat;
//   background-attachment: var(--attachment_fixed);
// }

// .hero-image-opacity{
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background-color: var(--hero-opacity-color);
// }
