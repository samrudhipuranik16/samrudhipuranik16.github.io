import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from './components/App1'
//import App2 from './components/App2'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import App2 from './components/App2'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
 // return <h1> Hello world </h1>
 return (
    <BrowserRouter>
    <div>
      <Link to="app1">App1</Link>
      <Link to="app2">App2</Link>
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}/>
        <Route path="app1" element ={<App1/>}/>
        <Route path="app2" element ={<App2/>}/>
      </Routes>
    </div>
    </BrowserRouter>
 );
}

export default App
