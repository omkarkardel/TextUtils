import React, { useState } from "react";

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white'
    // })
    let myStyle = {
      color: props.mode === 'dark'?'white': '#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }
    // const[btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({

    //            color: 'white',
    //            backgroundColor: 'black'

    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({

    //            color: 'black',
    //            backgroundColor: 'white'

    //         })
    //         setBtnText("Enable Dark Mode");

    //     }
    // }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}
      >About Us</h1>
      <div className="accordion"  id="accordionExample"  >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Porro dignissimos quod sed aspernatur nisi pariatur repellendus vel aut facere repudiandae!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis provident ipsa mollitia ducimus rem, magnam assumenda est rerum molestias voluptatem.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"            
              >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque debitis perspiciatis enim obcaecati maiores odio, non facilis sint!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
