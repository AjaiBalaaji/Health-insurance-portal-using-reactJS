import React from 'react'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

// import Signin from './Signin'
// import Signup from './Signup'
// import HomePage from './HomePage'


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Signin/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/Signin" element={<Signin/>}></Route>
       </Routes>
  </Router>
       {/* <HomePage/> */}
    </div>
  )
}

export default App