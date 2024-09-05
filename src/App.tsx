import './App.css'
import Title from './components/Title'
import Section from './components/section'
import List from './components/List'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {  
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
    <div className="lg:hidden flex flex-col items-center pl-[11%] py-1 bg-secondary-yellow">
        <List 
        className="flex flex-col lg:gap-40 pt-1"
        listimagestyle={["url(src/assets/github-40.png)", "url(src/assets/linkedin-40.png)", "url(src/assets/instagram-40.png)"]}
        content={[<a className="relative top-[-25%]" href="https://www.princesapop.com/">github.com/ThainaLudgero</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">linkedin.com/in/thainámoreira</a>, <a className="relative top-[-25%]" href="https://www.princesapop.com/">instagram.com/thaina.moreirah_/</a>]} 
        />
    </div>
    <Section className="lg:hidden">
      <div className='flex flex-col items-center gap-5 px-7 py-10'>
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
    <Section background={false} className="lg:py-0 lg:px-0">
      <Carousel 
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container"  
      draggable = {false}
      focusOnSelect={false}
      infinite    
      minimumTouchDrag={80}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewindWithAnimation={false}
      rtl={false}
      slidesToSlide={1}
      swipeable
      >
        {/* First Slide */}
        <div className="flex gap-16 h-[577px] px-7 py-16 bg-secondary-yellow">
          <div className="relative h-fit px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">Ecommerce</h3>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto1.png" alt="ecommerce" />
        </div>
        {/* Second Slide */}
        <div className="flex gap-16 h-[577px] px-7 py-16 bg-accent-pink">
          <div className="relative h-fit px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">To Do List</h3>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto2.png" alt="ecommerce" />
        </div>
        {/* Third Slide */}
        <div className="flex gap-16 h-[577px] px-7 py-16 bg-terciary-purple">
          <div className="relative h-fit px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">Terceiro Projeto</h3>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
               voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto2.png" alt="ecommerce" />
        </div>
        {/* <div className="bg-primary-blue h-[577px]">Item 3</div> */}
      </Carousel>
    </Section>
    {/* Fim Section */}
      <Title title="fim" bgcolor="#2549F9" />
    </>
  )
}

export default App
