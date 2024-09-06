import './App.css'
import Title from './components/Title'
import Section from './components/section'
import List from './components/List'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

function App() {  
  return (
    <>
    {/* Sobre mim Section */}
    <Title title="sobre mim" bgcolor="#f9d625" />
    <Section className="hidden lg:block">
      <div className="relative flex gap-12 pt-8">
        <motion.img
          className="absolute top-[70%]"
          src="src/assets/mao.png"
          alt="mão acenando"
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ rotate: [0, 0, 0, 35, -35, 0] }} // Rotaciona para a direita e esquerda
          whileInView={{ opacity: 1, y: 0 }} // Animação de entrada
          whileHover={{ rotate: [0, 20, -20, 0] }} // Animação de rotação ao passar o cursor
          viewport={{ once: true, amount: 0.9 }} // Animação apenas uma vez quando entra na visualização
          transition={{ 
              rotate: { duration: 2, repeatType: 'loop' }, // Animação de rotação
              opacity: { duration: 0.5 }, // Animação de entrada
              y: { duration: 1 } // Animação de entrada
          }}
        />
        <motion.img
          className="absolute top-[35%]"
          src="src/assets/estrela.png"
          alt="mão acenando"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, 0] }} 
          transition={{ 
            duration: 1, 
            repeatType: "loop" 
          }}
        />
        <motion.img
          className="absolute top-[25%] left-[2.5%]"
          src="src/assets/estrela2.png"
          alt="mão acenando"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 7, -7, 0] }} 
          transition={{ 
            duration: 1, 
            repeatType: "loop"
          }}
        />
        <motion.img
          className="absolute top-[6%] left-[17%]"
          src="src/assets/balao.png"
          alt="mão acenando"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 25, 0, 0] }}
          transition={{ 
            duration: 1.5, 
            repeatType: "loop" 
          }}
        />
        <motion.img
          className="absolute top-[75%] left-[22%]"
          src="src/assets/espiral.png"
          alt="mão acenando"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 0, -360, 0] }}
          transition={{ duration: 1 }}
        />
        <motion.img
          className="absolute top-[85%] left-[22%] z-10"
          src="src/assets/positivo.png"
          alt="mão acenando"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 25, -25, 0] }}
          transition={{ 
            duration: 1 , 
            repeatType: "loop" 
          }}
        />
        <motion.img
          className="absolute top-[85%] left-[20%]"
          src="src/assets/seta.png"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1 }}
        />
        <img src="src/assets/foto.png" alt="foto thaina" />
        <div className="flex flex-col justify-center items-center text-sm indent-5 text-justify">
        <motion.img
          src="src/assets/bem-vindo.png"
          alt="bem vindo"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.6 }}
        />
          <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
        </div>
      </div>
      <div className="-mx-[152px] pl-[20%] my-12 bg-secondary-yellow">
      <List
        className="flex gap-40 pt-1"
        listimagestyle={[
            "url(src/assets/github-40.png)",
            "url(src/assets/linkedin-40.png)",
            "url(src/assets/instagram-40.png)"
        ]}
        content={[
            <a className="relative top-[-25%] hover:text-white transition-colors" href="https://www.princesapop.com/">github.com/ThainaLudgero</a>,
            <a className="relative top-[-25%] hover:text-white transition-colors" href="https://www.princesapop.com/">linkedin.com/in/thainámoreira</a>,
            <a className="relative top-[-25%] hover:text-white transition-colors" href="https://www.princesapop.com/">instagram.com/thaina.moreirah_/</a>
        ]}
      />
      </div>
      <div className='flex justify-between pb-10'>
      <List
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Educação"
        content={[
            "2025 - Análise e Desenvolvimento de Sistemas Unopar",
            "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"
        ]}
      />
      <List
        listimagestyle={["url(src/assets/list-image-15.png)"]}
        title="Habilidades"
        content={[
            "2025 - Análise e Desenvolvimento de Sistemas Unopar",
            "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"
        ]}
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
          <div className="relative h-fit ml-5 px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">Ecommerce</h3>
                <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                  voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
                <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                  voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
                <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                  voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            </motion.div>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto1.png" alt="ecommerce" />
        </div>
        {/* Second Slide */}
        <div className="flex gap-16 h-[577px] px-7 py-16 bg-accent-pink">
          <div className="relative h-fit ml-5 px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">To Do List</h3>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            </motion.div>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto2.png" alt="ecommerce" />
        </div>
        {/* Third Slide */}
        <div className="flex gap-16 h-[577px] px-7 py-16 bg-terciary-purple">
          <div className="relative h-fit ml-5 px-7 py-6 rounded-[20px] bg-white">
            <img className="absolute left-[-6%] top-[-5%]" src="src/assets/projectdeco1.png" alt="decoração" />
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-primary-blue font-PeaceSans text-left pb-4">Terceiro Projeto</h3>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
              <p className="text-sm indent-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur veniam repellat quaerat numquam enim sapiente mollitia sint
                voluptatem quam debitis, quae a optio, quidem non, aperiam voluptate modi dolorem.</p>
            </motion.div>
            <img className="absolute left-[95%] top-[90%]" src="src/assets/projectdeco2.png" alt="decoração" />
          </div>
          <img src="src/assets/projeto2.png" alt="ecommerce" />
        </div>
      </Carousel>
    </Section>
    {/* Fim Section */}
      <Title title="fim" bgcolor="#2549F9" />
      <Section>
      <div className="flex gap-12 pt-8 pb-14">
        <div className="flex flex-col justify-center items-center text-sm indent-5 text-justify">
          
        <motion.img
          src="src/assets/obrigada.png"
          alt="obrigada pela visita"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.6 }}
        />
          <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident impedit praesentium molestiae commodi ut iusto, et pariatur voluptatum, nostrum officiis consequatur quam sequi quo, illum perferendis rerum exercitationem fuga aliquam!</p>
        </div>
      </div>
      </Section>
    </>
  )
}

export default App
