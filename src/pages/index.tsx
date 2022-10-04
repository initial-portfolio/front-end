import {
  Link,
  Header,
  Nav,
  SectionContainer,
  SectionService,
  SectionForm,
} from '../styles/index.styles';
import Image from 'next/image';
import Head from 'next/head';
import { Form } from '../components/Form/Form';

export const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="SOMOS A GANASHY
Oferecemos as melhores soluções de software"
        />
        <title>Ganashy - Oferecemos as melhores soluções de software</title>
      </Head>
      <main>
        <Header>
          <Nav>
            <h1>ganashy</h1>
          </Nav>
          <Nav>
            {/*<div id="menu">*/}
            {/*  <Hamburger toggled={open} toggle={handleOpenAndCloseMenu} />*/}
            {/*</div>*/}

            <Link href={'#'}>Sobre nós</Link>
            <Link href={'#'}>Serviços</Link>
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

        <SectionService>
          <h2>O QUE FAZEMOS</h2>

          <h3>Soluções de software para terceiros</h3>

          <div id={'service'}>
            <h4>
              Nossa empresa fica responsável pelo desenvolvimento do seu
              projeto.
            </h4>
            <p>
              Fazemos uma estimativa de custo e previsão de data de entrega e
              então trabalhamos na implementação utilizando as melhores práticas
              ágeis. O escopo é variável e nós frequentemente reavaliamos o que
              deverá ser construído, assim você terá o software que realmente
              precisa no final do projeto.
            </p>
          </div>
          <div id="block-red">
            <h4>
              Ideal para empresas que não possuem um time de desenvolvimento
              interno disponível.
            </h4>
          </div>
        </SectionService>
        <SectionForm>
          <h2>FALE CONOSCO</h2>
          <Form />
        </SectionForm>
      </main>
    </>
  );
};
export default Home;
