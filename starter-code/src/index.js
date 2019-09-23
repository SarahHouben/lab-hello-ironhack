import React from 'react';
import ReactDOM from 'react-dom'
import "./style.css";


const headElement = (
  <header>
    <img src="images/ironhack-logo.svg" alt="Ironhack Logo"/>
    <img src="images/menu-top.svg" alt="Menu"/>
  </header>
);

const topElement = (
    <div className="container">
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h2>
        <button className="top-btn">Awesome!</button>        
    </div>
);

const middleElement = (
    <div className="middle-container">
        <section>
            <img className="sec-img" src="images/icon1.png" alt=""/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </section>
        <section>
            <img className="sec-img" src="images/icon2.png" alt=""/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </section>
        <section>
            <img className="sec-img" src="images/icon3.png" alt=""/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
        </section>
        <section>
            <img className="sec-img" src="images/icon4.png" alt=""/>
            <h3>JSX</h3>
            <p>Statically typed, designed to run on modern browsers</p>
        </section>
    </div>
);

ReactDOM.render(<header>{headElement}</header>, document.getElementById("head-element"));
ReactDOM.render(<div>{topElement}</div>, document.getElementById("top-element"));
ReactDOM.render(<div>{middleElement}</div>, document.getElementById("middle-element"));