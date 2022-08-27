import { Link, Header, Nav, SectionContainer } from "../styles/index.styles";
import Image from 'next/image';

export const Home = () => {
  return (
    <main>
      <Header>
        <Nav>
          <h1>ganashy</h1>
          <img src="/logo.svg" alt="logo" />
        </Nav>
        <Nav>
          <Link href={''}>Sobre nós</Link>
          <Link href={''}>Serviços</Link>
        </Nav>
      </Header>
      <SectionContainer>
        <Image
          alt={'image'}
          src={'/homeImage.svg'}
          width={3000}
          height={1380}
          layout="responsive"
          objectFit="cover"
          draggable={false}
        />
        <div>
          <h1>Somos a Ganashy</h1>
        </div>
      </SectionContainer>
    </main>
  );
};
export default Home;
