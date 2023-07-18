import { useEffect, useState } from "react"

function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  async function getData() {
    const resurl = await fetch("https://api.adviceslip.com/advice")
    const data = await resurl.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(function () {
    getData();
  }, []);
  return (
    <div>
      <h1>Advice App</h1>
      <p>Click the button then you can get the advice</p>
      <button onClick={getData}>Click Here</button>

      <h3>{count}:{advice}</h3>

    </div>
  )

}

export default App

