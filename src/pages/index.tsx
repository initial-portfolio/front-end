import { Link, Header, Nav } from '../styles/index.styles';
// @ts-ignore
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
      <Image
        alt={'image'}
        src={'/homeImage.svg'}
        width={3000}
        height={1580}
        layout="responsive"
        objectFit="cover"
      />
    </main>
  );
};
export default Home;
