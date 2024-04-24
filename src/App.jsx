import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from './data.js'


function App() {

  const cards = data.map(item =>{
    return(
      <Card
      key={item.id}
      item={item}
    />
    )
  }
  )

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="card-container place-content-center">
        {cards}
      </section>
  

    </div>
  )
}

export default App
