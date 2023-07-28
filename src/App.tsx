
import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

const allFrases = [
  {id:1,
  nome: 'Motivação',
  frases: [
    "Acredite em si mesmo e conquiste o impossível.",
    "O fracasso é apenas uma oportunidade para recomeçar de forma mais inteligente.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Sonhe grande, trabalhe duro e faça acontecer.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "A jornada de mil quilômetros começa com um simples passo.",
    "Quanto maior o desafio, maior é a oportunidade de crescimento.",
    "Não há atalhos para alcançar o sucesso, apenas trabalho árduo e dedicação.",
    "Você é mais forte do que pensa e mais capaz do que imagina.",
    "O medo não pode parar você, só você pode fazer isso.",
    "Acredite em sua capacidade de superar obstáculos e eles se tornarão insignificantes.",
    "Nunca desista. Os maiores feitos da história foram alcançados por aqueles que persistiram.",
    "A motivação pode te levar a começar, mas é a determinação que te faz continuar.",
    "Cada dia é uma nova oportunidade para se aproximar dos seus objetivos.",
    "Você é responsável pelo seu próprio destino, então escolha ser extraordinário."
  ]
},
{
  id: 2,
  nome: 'Bom dia',
  frases: [
    'Bom dia! Que hoje seja repleto de sorrisos e boas energias!',
    'Que a luz do sol traga novas oportunidades e realizações. Bom dia',
    'Comece o dia com gratidão no coração e tudo se tornará mais bonito. Bom dia!',
    'Que cada novo amanhecer traga consigo a esperança de um dia incrível. Bom dia!',
    'Desejo que sua jornada seja leve e cheia de alegria. Bom dia!',
    'Sorria para a vida e ela sorrirá de volta para você. Bom dia!',
    'Hoje é um presente, por isso aproveite ao máximo. Bom dia!',
    'Que o dia seja produtivo e repleto de conquistas. Bom dia!',
    'Lembre-se de que cada dia é uma nova chance de recomeçar. Bom dia!',
    'Abrace as possibilidades do dia com entusiasmo e determinação. Bom dia!',
    'Que cada momento seja uma oportunidade para criar memórias especiais. Bom dia!',
    'A vida é feita de pequenos momentos felizes. Aproveite cada um deles. Bom dia!',
    'Que a luz do amanhecer ilumine seus caminhos hoje e sempre. Bom dia!',
    'Cultive o otimismo, pois ele é a chave para dias mais felizes. Bom dia!',
    'Comece o dia com um coração grato e tudo fluirá com mais harmonia. Bom dia!,'
  ]
}
]


function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    
    const frase = allFrases[categoriaSelecionada].frases[numeroAleatorio]
    setTextoFrase(frase)
  }
  return (
   <div className='container'>
      <img src={logoImg} alt="Logo frases" />

      <h2 className='title'>Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button key={item.id} style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: item.nome === allFrases[categoriaSelecionada].nome ?'#1fa4db' : '#fff',
            backgroundColor: item.nome === allFrases[categoriaSelecionada].nome ?'#1fa4db' : '#fff',
            color: item.nome === allFrases[categoriaSelecionada].nome ?'#fff' : 'black',
            
          }}
          onClick={() => handleSwitchCategory(index)}
          >
              {item.nome}
          </button>
        ) )}
        
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frases</button>

      {textoFrase !== '' &&  <h2 className='textoFrase'>{textoFrase}</h2>}
      

   </div>
  )
}

export default App
