import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import './css/components.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
