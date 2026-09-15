import Card from "./components/Card"

function App() {

  return (
    <div 
      style={{
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'18px'
      }}
    >
      <Card title='Shoes' desc='This is a sports shoes from Nike!' price='12.99' btn='Try now'/>
      <Card title='AC' desc='This is a air conditioner from LG electronics!' price='500.99' btn='Its winter'/>
      <Card title='Laptop' desc='This is a laptop from apple!' price='1200.99' btn='Add to cart'/>

    </div>
  )
}

export default App
