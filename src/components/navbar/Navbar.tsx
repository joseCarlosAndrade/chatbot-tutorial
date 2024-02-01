import React, { useState } from 'react'
// importing icons from reacticons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "src/assets/logo.svg"; // this import is by default not allowed. We have to create the custom
//file custom.d.ts in src/ and add it to tsconfig.json

// reusable menu
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">OpenAI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)


// BEM -> block element modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        
        <div className='gpt3__navbar-links_logo'>
          <img src={logo.toString()} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu></Menu>

        </div>
      </div>
      <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div>

      {/* adding responsivness for mobile: */}
      <div className='gpt3__navbar-menu' >
        {
        toggleMenu ? 
        <RiCloseLine color='#fff' size={27} onClick={()=>{setToggleMenu(false)}}/> 
        : <RiMenu3Line color='#fff' size={27} onClick={()=>{setToggleMenu(true)}}/> 
        }
        {toggleMenu && ( // only if this variable is true, then render what is comming
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu></Menu>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar
