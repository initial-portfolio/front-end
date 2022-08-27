import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  min-width: 650px;
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

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
  position: relative;
  
  & > div {
    position: absolute;
    top: 40%;
    left: 13.5%;
    
    > h1 {
      font-family: Roboto;
      font-size: 40px;
    }
  }

`
