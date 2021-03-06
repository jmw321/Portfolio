import React, {Component} from "react";
import "./App.css";
import Task from "./Taskboard.jpg";
import Uv from "./uvtracknew.jpg";
import Hoa from "./hoa.jpg";


var showDescInd = false;
var showDescId = 0;

var projects = [
  {id: 0, name: "Task Board", image:Task, description: "Built using React, this is a task board based on a Kanban board. Create a new card, add or remove a task item."},
  {id: 1, name: "HOA", image:Hoa, description: "Built using React, this is a sample site for a community homeowner association. Uses routing to navigate to additional site pages."},
  {id: 2, name: "UV Index App", image:Uv, description: "Built using React, a single page app that uses API from OpenUV to fetch realtime UV index. Also, as a fun feature, user is able to choose from different backgrounds."},
//  {id: 3, name: "Arcade Game"},
//  {id: 4, name: "Neighborhood App"},
//  {id: 5, name: "Memory Game"}
];

var letters = [
  {id: 0, letter: [" ", " ", " ", " ", " ", " ", " ", " ", "A"]},
  {id: 1, letter: [" ", " ", "W", " ", " ", " ", " ", " ", "B"]},
  {id: 2, letter: [" ", " ", "E", " ", " ", " ", " ", " ", "O"]},
  {id: 3, letter: [" ", " ", "L", " ", " ", " ", " ", " ", "U"]},
  {id: 4, letter: [" ", " ", "C", "O", "N", "T", "A", "C", "T"]},
  {id: 5, letter: [" ", " ", "O", " ", " ", " ", " "]},
  {id: 6, letter: ["I", "'", "M", " ", " ", " ", " "]},
  {id: 7, letter: [" ", "J", "E", "N", "N", "A", " "]},
  {id: 8, letter: [" ", " ", " ", " ", " ", " ", " "]}
];


var lettersHalf = [
  {id:0, letter:["H","E","L","L","O"]},
  {id:1, letter:["I","'","M"]},
  {id:2, letter:["J","E","N","N","A"]}
]

class App extends Component {

  constructor (props) {
    super(props);
    this.scrollDiv = React.createRef();
    this.state = {showDescInd,showDescId};
  }


  showDescription = (event) => {
      this.setState({showDescId:event.target.id, showDescInd:true})
  }

  closeDescription = (event) => {
    this.setState({showDescInd:false})
  }

  render() {


    return (
      <div className="App">
        <header />
        <div className="introduction">
          <div className="lettersContainer">
            <div className="lettersContainer_inner" onClick={() => {
            this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
          }}>
              {letters[0].letter.map(item =>
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              )}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[1].letter.map(item =>
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              )}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[2].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[3].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[4].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[5].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[6].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[7].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>
            <div className="lettersContainer_inner">
              {" "}
              {letters[8].letter.map(item => (
                item !== " " ?
                <div className="letters"> {item} </div>:
                <div className="letters-empty"> {item} </div>
              ))}
            </div>

            <div className="lettersContainer_innersmall">
             {lettersHalf[0].letter.map(item => (
              item !== " " ?
              <div className="letters"> {item} </div>:
              <div className="letters-empty"> {item} </div>
            ))}
            </div>
            <div className="lettersContainer_innersmall">
             {lettersHalf[1].letter.map(item => (
              item !== " " ?
              <div className="letters"> {item} </div>:
              <div className="letters-empty"> {item} </div>
            ))}
            </div>
            <div className="lettersContainer_innersmall">
             {lettersHalf[2].letter.map(item => (
              item !== " " ?
              <div className="letters"> {item} </div>:
              <div className="letters-empty"> {item} </div>
            ))}
            </div>



          </div>
        </div>
        <div className="sectionTwo" ref={this.scrollDiv}>
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

        {this.state.showDescInd === true &&  <div className="portfolioProject">
          <button onClick={this.closeDescription}> Close </button>
            <p>{projects[this.state.showDescId].description}</p>
            <img src={projects[this.state.showDescId].image} alt={projects[this.state.showDescId].name}/>
          </div>}
          <ul className="portfolio_list" onClick={this.showDescription}>
            {projects.map(item => (
              <li id={item.id} className="portfolio_items">
                <img id={item.id} src={item.image} alt={item.name} className="portfolio_list_images" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
