import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  #menu {
    display: none;
  }
  @media screen and (max-width: 900px) {
    left: 8%;
  }
  @media screen and (max-width: 600px) {
    #menu {
      display: flex;
    }
    > nav {
      > div {
        margin: 0 15px 0 0;
      }

      > a {
        display: none;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  > h1 {
    font-size: 40px;
    font-family: flamenco, serif;
  }
`;

export const Link = styled.a`
  font-size: 25px;
  font-weight: bold;
  font-family: flamenco, serif;
  padding: 8px;
  background: rgba(240, 82, 82, 0.7);
  border-radius: 6px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const SectionContainer = styled.section`
  #image-mobile {
    display: none;
  }
  position: relative;

  & > #text-principal {
    position: absolute;
    top: 40%;
    left: 13.5%;

    > h1 {
      font-family: Roboto, serif;
      font-size: 48px;
      color: #2c2d2d;
    }

    > h2 {
      color: rgba(234, 18, 18, 0.7);
      font-size: 25px;
      font-weight: 600;
    }
    @media screen and (max-width: 900px) {
      top: 30%;
      left: 8%;
      > #image-desktop {
        display: none;
      }
      > h1 {
        font-size: 50px;
      }
      > h2 {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 900px) {
    > #image-desktop {
      display: none;
    }
    #image-mobile {
      display: block;
    }
  }
`;

export const SectionService = styled.section`
  margin-top: 5rem;
  display: flex;
  text-align: center;

  flex-direction: column;
  align-items: center;

  > h2 {
    color: #1b5475;
    font-size: 2.5rem;
  }

  > h3 {
    margin-top: 1rem;
    font-size: 26px;
    color: rgba(234, 18, 18, 0.7);
  }

  > #service {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;
    font-size: 18px;
    background-color: #ffffff;

    width: 650px;
    height: 250px;

    > h4 {
      color: #1b5475;
      margin-top: 1rem;
    }
    > p {
      text-align: left;
      color: #333333;
      width: 550px;
      height: 249px;

      margin-top: 2rem;
    }

    @media screen and (max-width: 900px) {
      > #image-desktop {
        display: none;
      }
      #image-mobile {
        display: block;
      }
    }
  }

  #block-red {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: rgba(234, 18, 18, 0.7);
    width: 650px;
    height: 65px;
  }
  @media screen and (max-width: 900px) {
    > #service {
      width: 360px;
      height: 300px;

      > p {
        width: 310px;
        height: 249px;
      }
    }
    #block-red {
      width: 360px;
      height: 65px;
    }
  }
`;

export const SectionForm = styled.section`
  margin: 3rem auto 0 auto;
  max-width: 1400px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: rgba(27, 84, 117, 0.05);
  padding: 2rem;
  border-radius: 0.8rem;

  > h2 {
    color: #1b5475;
    font-size: 2.5rem;
    text-align: center;
  }

  > form {
    margin-top: 2rem;
    padding: 0 3rem;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    > div:nth-last-child(-n + 3),
    button {
      grid-column: 1 / 3;
    }

    > button {
      height: 3rem;
      border: none;
      cursor: pointer;
      background: rgba(234, 18, 18, 0.7);
      border-radius: 0.4rem;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.2rem;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }

    > div {
      text-align: left;
      margin: 10px 0;
      display: flex;
      flex-direction: column;

      > label {
        font-weight: 500;
        font-size: 1.1rem;
        color: #2f2f2f;
      }

      > input,
      textarea {
        margin-top: 5px;
        height: 2.5rem;
        border: 1px solid rgb(42, 90, 103);
        border-radius: 0.3rem;
        padding: 0 0.5rem;
      }

      > textarea {
        resize: vertical;
        padding: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    > form {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      padding: initial;

      > div {
        text-align: left;
        margin: 3px 0;
        display: flex;
        flex-direction: column;

        > input {
          margin-top: 5px;
        }
      }
    }
  }
`;
