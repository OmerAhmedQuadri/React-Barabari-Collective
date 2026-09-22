import Card from './components/Card'

function App() {
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'100vh'
      }}
    >
      <Card/>
    </div>
  )
}

export default App