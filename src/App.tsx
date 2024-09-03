import './App.css'
import Title from './components/Title'
import Section from './components/Section'
import List from './components/List'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    {/* Sobre mim Section */}
    <Title title="sobre mim" bgcolor="#f9d625" />
    <Section className="hidden lg:block">
      <div className="flex gap-12 pt-8">
        <img className="h-auto" src="src/assets/foto.png" alt="foto da thaina" />
        <div className="flex flex-col justify-center items-center text-sm indent-5 text-justify">
          <img src="src/assets/bem-vindo.png" alt="bem vindo" />
          <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
        </div>
      </div>
      <div className="-mx-[152px] pl-[20%] my-12 bg-secondary-yellow">
        <List 
        className="flex gap-40 pt-1"
        listimagestyle={["url(src/assets/github-40.png)", "url(src/assets/linkedin-40.png)", "url(src/assets/instagram-40.png)"]}
        content={[<a className="relative top-[-25%]" href="https://www.princesapop.com/">github.com/ThainaLudgero</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">linkedin.com/in/thainámoreira</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">instagram.com/thaina.moreirah_/</a>]} 
        />
      </div>
      <div className='flex justify-between pb-10'>
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Educação" 
        content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
        />
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Habilidades" 
        content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
        />
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Interesses" 
        content={["Design", "Programação Web", "Old Web"]} 
        />
      </div>
    </Section>
    {/* Mobile Content */}
    <Section className="lg:hidden">
      <div className="flex flex-col gap-12 pt-8">
        <img className="h-auto" src="src/assets/foto.png" alt="foto da thaina" />
        <div className="flex flex-col justify-center items-center text-sm indent-5 text-justify pb-10">
          <img src="src/assets/bem-vindo.png" alt="bem vindo" />
          <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
        </div>
      </div>
    </Section>
    <div className="lg:hidden flex flex-col justify-center items-center bg-secondary-yellow">
        <List 
        className="flex flex-col lg:gap-40 pt-1"
        listimagestyle={["url(src/assets/github-40.png)", "url(src/assets/linkedin-40.png)", "url(src/assets/instagram-40.png)"]}
        content={[<a className="relative top-[-25%]" href="https://www.princesapop.com/">github.com/ThainaLudgero</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">linkedin.com/in/thainámoreira</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">instagram.com/thaina.moreirah_/</a>]} 
        />
    </div>
    <Section className="lg:hidden">
      <div className='flex flex-col justify-center items-center py-10'>
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Educação" 
        content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
        />
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Habilidades" 
        content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
        />
        <List 
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Interesses" 
        content={["Design", "Programação Web", "Old Web"]} 
        />
      </div>
    </Section>
    {/* Projetos Section */}
      <Title title="projetos" bgcolor="#6C25F9" />
    <Section background={false}>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Section>
    {/* Fim Section */}
      <Title title="fim" bgcolor="#2549F9" />
    <Section>
    </Section>
    </>
  )
}

export default App
