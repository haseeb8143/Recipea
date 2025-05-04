import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([{ id: uuidv4() }])

  const handleAddCard = () => {
    setCards([...cards, { id: uuidv4() }])
  }

  return (
    <div>
      <Navbar onAddCard={handleAddCard} />
      <div className="cards">
        {cards.map(card => (
          <Card key={card.id} />
        ))}
      </div>
    </div>
  )
}

export default App
