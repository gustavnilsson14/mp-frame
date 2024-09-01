import './App.css'

function App() {
  console.log("tryna connect")
  const ws = new WebSocket("ws://localhost:1338");
  
  
  return (
    <>
      hello env! :D
    </>
  )
}

export default App
