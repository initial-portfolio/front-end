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
      font-weight: 400;
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
