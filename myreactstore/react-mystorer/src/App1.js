// in index.js give app1 instead of app and write import app1 from app1

import React from 'react'
import "./App1.css"
export default function App1() {
    let a = 10
    let b = 20
  return (
    <div>
        {a+b}
        <p style={{backgroundColor:'pink'}}>Hello World</p>
        <p>Good Morning</p>
    </div>
  )
}