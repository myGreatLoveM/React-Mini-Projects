import './App.css'
import Card from './comps/Card'

function App() {
  return (
    <div className='App'>
      <Card
        imgSrc='https://picsum.photos/300/200'
        imgAlt='Card Image'
        title='Card Title'
        description='This is the card description. You can add more details about the card'
        buttonText='Learn More'
        link='cardPage'
      />
    </div>
  )
}

export default App
