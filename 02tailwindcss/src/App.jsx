import Card from './components/Card';
function App() {
  const userDetails = {
    userName : "satyam singh",
    description : "He is not a batsman!!!!!!!"
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <Card myObj={userDetails}/>
    </>
  )
}

export default App
