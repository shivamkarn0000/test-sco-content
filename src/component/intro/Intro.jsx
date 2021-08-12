import "./intro.css"
import "./mobile.css"
import { init } from 'ityped'
import { useEffect} from "react"
import React from "react"


export default function Intro() {
  // const textref = { useref }
  
  const textref = React.useRef(null)

  useEffect(() => {

    init(textref.current,
      {
        backDelay: 1500,
        backSpeed: 70,
        showCursor: true,
        strings: ['Developer', 'Desinger', 'Programmer'],
        onFinished: function(){},
      })
  },[] );

  return (
    <div className="intro" id="intro">
      <div className="leftintro">
        <div className="imgcontainer">
          <img className="img" src="../allimg/man.png" alt="my-img!!"/>
        </div>
      </div>
      <div className="rightintro">
        <div className="wrapper-intro">
          <h2 className="h2-intro">Hi There, I'm</h2>
          <h1 className="h1-intro">shivam karn</h1>
          <h3 className="h3-intro">Web <span className="intro-span" ref={textref}></span>
          </h3>
        </div>
        <a className="container-img" href="#portfolio">
          <img className="img-intro" src="allimg/arrow.png" alt="buttom" />
        </a>
      </div>
    </div>
  )
}
