import { Link, Header, Nav, SectionContainer } from '../styles/index.styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Home = () => {
  return (
    <main>
      <Header>
        <Nav>
          <h1>ganashy</h1>
          {/*<img src="/logo.svg" alt="logo" draggable/>*/}
        </Nav>
        <Nav>
          <div id="menu">
            <Image
              width={40}
              height={40}
              src="/menu.svg"
              alt="menu"
              draggable
            />
          </div>
          <Link href={''}>Sobre nós</Link>
          <Link href={''}>Serviços</Link>
        </Nav>
      </Header>
      <SectionContainer>
        <div id={'image-desktop'}>
          <Image
            alt={'image'}
            src={'/homeImage.svg'}
            width={3000}
            height={1380}
            layout="responsive"
            objectFit="cover"
            draggable={false}
          />
        </div>
        <div id={'image-mobile'}>
          <Image
            alt={'image'}
            src={'/HomeImageMobile.svg'}
            width={300}
            height={600}
            layout="responsive"
            objectFit="cover"
            draggable={false}
          />
        </div>
        <div id="text-principal">
          <h1>SOMOS A GANASHY</h1>
          <h2>Oferecemos as melhores soluções de software</h2>
        </div>
      </SectionContainer>

      <section>
        <h1>Nos somo a ganashy</h1>
      </section>
    </main>
  );
};
export default Home;
