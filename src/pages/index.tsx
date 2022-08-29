import { Link, Header, Nav, SectionContainer } from "../styles/index.styles";
import Image from 'next/image';
import { useEffect, useState } from "react";

export const Home = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 800){
        setMobile(true)
    }
  }, [])
  console.log('teste', mobile)
  return (
    <main>
      <Header>
        <Nav>
          <h1>ganashy</h1>
          <img src="/logo.svg" alt="logo" />
        </Nav>
        <Nav>
          {mobile && (
            <div>
            <Image width={40} height={40} src="/menu.svg" alt="menu" draggable />
            </div>
              )}
          <Link href={''}>Sobre nós</Link>
          <Link href={''}>Serviços</Link>
        </Nav>
      </Header>
      <SectionContainer>
        <Image
          alt={'image'}
          src={'/homeImage.svg'}
          width={mobile ? 300 : 3000}
          height={mobile ? 600 : 1380}
          layout="responsive"
          objectFit="cover"
          draggable={false}
        />
        <div>
          <h1>SOMOS A GANASHY</h1>
          <h2>Oferecemos as melhores soluções de software</h2>
        </div>
      </SectionContainer>
    </main>
  );
};
export default Home;
