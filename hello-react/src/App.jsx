// src/App.js
import './App.css'
import logo from "./assets/ihlogo.png"
import menu from "./assets/ihmenu.png"
import icon from "./assets/ihicon.png"
import icon2 from "./assets/ihicon2.png"
import icon3 from "./assets/ihicon3.png"
import icon4 from "./assets/ihicon4.png"

function App() {
  return <div className='App'>
    <div className='darkpart'>
      <div>
      <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <img src={menu} alt="menu" className='menu' />
      </nav>
    </div>

   
    <div className='sayhello'>
      <h1 className='whiteh1'>Say Hello to ReactJs</h1>
      <p className='whitep'>You will learn how to use the most popular frontend library,
        and become a super ninja developer
      </p>
      <button className='button'>AWESOME!</button>
    </div>
    
    </div>

<section className='icons'>
<div className='icon'>
      <img src={icon} alt="icon"/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>

    <div className='icon'>
      <img src={icon2} alt="icon"/>
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
    </div>

    <div className='icon'>
      <img src={icon3} alt="icon"/>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components.</p>
    </div>

    <div className='icon'>
      <img src={icon4} alt="icon"/>
      <h3>JSX</h3>
      <p>Statically-typed designed to run on modern browsers</p>
    </div>
</section>
    

  </div>
}
export default App
