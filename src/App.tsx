import './App.css'
import Title from './components/Title'
import Section from './components/Section'
import List from './components/List'

function App() {
  return (
    <>
    <Title title="sobre mim" bgcolor="#f9d625" />
    <Section>
        <div className="bg-secondary-yellow">
          <List 
          className="flex overflow"
          listimagestyle='url(assets/list-image-15.png)'
          content={[<a href="https://www.princesapop.com/">github.com/ThainaLudgero</a>, <a href="https://www.princesapop.com/">linkedin.com/in/thainámoreira</a>, <a href="https://www.princesapop.com/">instagram.com/thaina.moreirah_/</a>]} 
          />
        </div>
        <div className='flex justify-between'>
          <List 
          listimagestyle='url(assets/list-image-15.png)'
          title="Educação" 
          content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
          />
          <List 
          listimagestyle='url(assets/list-image-15.png)'
          title="Habilidades" 
          content={["2025 - Análise e Desenvolvimento de Sistemas Unopar", "2022 - Técnica em Informática Básica Escola Estadual de Educação Profissional"]} 
          />
          <List 
          listimagestyle='url(assets/list-image-15.png)'
          title="Interesses" 
          content={["Design", "Programação Web", "Old Web"]} 
          />
        </div>
    </Section>
      <Title title="projetos" bgcolor="#6C25F9" />
    <Section>
    </Section>
      <Title title="fim" bgcolor="#2549F9" />
    <Section>
    </Section>
    </>
  )
}

export default App
