import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import $ from 'jquery';
import { Button, Card, Row, Col, Modal, Panel} from 'react-bootstrap';
// import { Button, Card, Row, Col, Modal, Grid } from 'react-materialize';


class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      project: ['airbnb-master','express-mongo-pet-shelter', 'Game']
    }
  }
  handleClickSkill(){
    ReactDOM.render(<Skills />, document.getElementById('main'))
  }
  handleClickHome(){
    ReactDOM.render(<Homepage />, document.getElementById('main'))
  }
  handleClickPastexp(){
    ReactDOM.render(<Pastexp />, document.getElementById('main'))
  }
  handleClickProjects(){
    ReactDOM.render(<Projects />, document.getElementById('main'))
  }
  render() {
    return (
      <div>
        <div className="grid">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 sidebar">
            <div className='nav'>
              <img src='mail.png' className='icons'/>
              <img src='linkedinblue.png' className='icons'/>
              <img src='GitHub.png' className='icons'/>
              <img src='medium.png' className='icons'/>
            </div>
            <div className='textSidebar'>
              <p className='highlight'  onClick={this.handleClickHome.bind(this)}>Home</p><br />
              <p className='highlight'  onClick={this.handleClickProjects.bind(this)}>Projects</p><br />
              <p className='highlight'  onClick={this.handleClickSkill.bind(this)}>Skills</p><br />
              <p className='highlight'  onClick={this.handleClickPastexp.bind(this)}>Past Experience</p><br />
              </div>
            </div>
            <div id='main'>
            <Homepage />
            </div>
          </div>
        </div>
        <footer>Made with '&#9829'. &C Sharona Valluvan. Content thieves will be bludgeoned</footer>
      </div>
    )
  }
}

class Projects extends React.Component{
  render(){
    return(
      <div>
      <div className='navBar'>
      <p className='name'>Sharona Valluvan</p>
      </div>
      <div className="col-lg-9 col-md-9 col-sm-9 flexType">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
      </div>
    )
  }
}

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <Panel className='panel'>
        <div className='panelText'>
        <p className='color'>Sahaya Sharona Valluvan</p>
        Full Stack Web Developer | Cost Engineer
        </div>
        </Panel>
        <div className='bodyText'>
        Hello, Thanks for stopping by! <br />
        I love solving logical problems and have somehow always found myself being pulled towards coding/programming in my previous roles. I love the feeling of creating something from scratch which made me take up web development. <br />
        Feel free to navigate through the links to know more about me
        </div>
      </div>
    )
  }
}

class Project1 extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false
    }
  }
  close(){
    this.setState({
      showModal: false
    })
  }
  open(){
    this.setState({
      showModal: true
    })
  }
  render(){
    return(<div className='card'>
      <div id="mod" className='black'>
      <h2 onClick={this.open.bind(this)}>BuszWatch</h2>
      <p>Real time Bus arrival time calculator</p>
      </div>

      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title><div className='black'>BuszWatch</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>What</p>
        <p>This website combines the Land Transport Authority (LTA) API with Google Maps in order to get details on the arrival times of selected bus routes at the selected stops</p>
        <p>Why</p>
        <p>I personally, always found it difficut to catch my bus on time every morn on the way to class. Hence to cure this itch, I decided to build my first node application on this</p>
        <p>How</p>
        <p>Node js, Express, Mongo DB, Mongoose, JavaScript, Html, Css, Materialize</p>
        </Modal.Body>
        <Modal.Footer><Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
        </Modal>
        </div>
      </div>
    )
  }
}

class Project2 extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false
    }
  }
  close(){
    this.setState({
      showModal: false
    })
  }
  open(){
    this.setState({
      showModal: true
    })
  }
  render(){
    return(<div className='card'>
      <div id="mod"></div>
      <h2 onClick={this.open.bind(this)}>Handy</h2>
      <p>Handymen freelancers Platform</p>

      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title>Handy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>What</p>
        <p>Handy is meant to be a platform for small scale handymen to be able to reach the techsavvy users who dont really know where to go to get repairs done around the house</p>
        <p>Why</p>
        <p>This was a team project and we wanted to explore a bunch of features which we could incorporate ont oa simple platform and so came up with this idea of a freelancers site</p>
        <p>How</p>
        <p>Rails, Ruby, PostgreSQL, HTML,CSS</p>
        </Modal.Body>
        <Modal.Footer><Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
        </Modal>
        </div>
      </div>
    )
  }
}

class Project3 extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false
    }
  }
  close(){
    this.setState({
      showModal: false
    })
  }
  open(){
    this.setState({
      showModal: true
    })
  }
  render(){
    return(
      <div className='card'>
        <div id="mod"></div>
        <h2 onClick={this.open.bind(this)}>Tetris</h2>
        <p>The classic game of clearing blocks</p>

        <div className='static-modal'>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton >
              <Modal.Title>Tetris</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>What</p>
              <p>Tetris is a classic block building game built without using canvas. It can be played with the intention of clearing filled rows. The user can rotate the blocks move it left and right</p>
              <p>Why</p>
              <p>When we were given the specifications for this project, I immediately got reminded of my childhood when I used to spend hours playing this game. I thought how cool would it be to build it myself and voila!</p>
              <p>How</p>
              <p>JavaScript, HTML,CSS</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

class Skills extends React.Component {
  render(){
    return(
      <div>
      <div className='navBar'>
      <p className='name'>Sharona Valluvan</p>
      </div>
      <div className='skills'>
        <div className='skillsDiv'>
          <h3>Languages</h3><hr />
          <div className='flexType'>
          <div className='outer'><img className='logo' src='js.jpg' />
          </div>
          <div className='outer'><img className='logo' src='HTML.png' />
          </div>
          <div className='outer'><img className='logo' src='CSS.png' />
          </div>
          <div className='outer'><img className='logo' src='ruby.png' />
          </div>
          </div>
        </div>
        <div className='skillsDiv'>
          <h3>Environments</h3><hr />
          <div className='flexType'>
            <div className='outer'><img className='logo' src='rails.png' />
            </div>
            <div className='outer'><img className='logo' src='nodejs.png' />
            </div>
          </div>
        </div>
        <div className='skillsDiv'>
          <h3>Databases</h3><hr />
          <div className='flexType'>
            <div className='outer'><img className='logo' src='mongobd.jpg' />
            </div>
            <div className='outer'><img className='logo' src='postgresql.png' />
            </div>
          </div>
        </div>
        <div className='skillsDiv'>
          <h3>Front-end-Frameworks</h3><hr />
          <div className='flexType'>
            <div className='outer'><img className='logo' src='react.jpg' />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

class Pastexp extends React.Component{
  render(){
    return (
      <div>
      <div className='navBar'>
      <p className='name'>Sharona Valluvan</p>
      </div>
      hello</div>
    )
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);
