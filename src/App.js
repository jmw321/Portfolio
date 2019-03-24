import React, {Component} from "react";
import "./App.css";

var projects = [
  {id: 0, name: "Task Board"},
  {id: 1, name: "HOA"},
  {id: 2, name: "UV Index App"},
  {id: 3, name: "Arcade Game"},
  {id: 4, name: "Neighborhood App"},
  {id: 5, name: "Memory Game"}
];

var lettersLineOne = ["W", "E", "L", "C", "O"];

var lettersLineTwo = ["I", "'", "M"];

var lettersLineThree = ["J", "E", "N", "N", "A"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header />
        <div className="introduction">
          <div className="letterContainerOne">
            {lettersLineOne.map(item => (
              <div className="letters"> {item} </div>
            ))}
          </div>
          <div className="letterContainerTwo">
            {lettersLineTwo.map(item => (
              <div className="letters"> {item} </div>
            ))}
          </div>
          <div className="letterContainerThree">
            {lettersLineThree.map(item => (
              <div className="letters"> {item} </div>
            ))}
          </div>
          <div id="one" /> <div id="two" /> <div id="three" />
        </div>
        <div className="sectionTwo">
          <div className="aboutMe">
            <h1 className="aboutMe_header"> A b o u t Me </h1>
            <p className="aboutMe_content">
              {" "}
              As you probably guessed, my name is Jenna. I am passionate about
              web development and design. I began my coding journey with Udacity
              and have been hooked since. I enjoy bringing design to life with
              javascript and continually learning from others. My other passion
              is health and creating apps that can improve my family's health,
              which inspired my project to track UV exposure! I hope to work
              with you soon!
            </p>
          </div>
        </div>
        <div className="portfolio">
          <h1 className="portfolio_header"> Portfolio </h1>
          <ul className="portfolio_list">
            {projects.map(item => (
              <li id={item.id} className="portfolio_items">
                {" "}
                {item.name}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
