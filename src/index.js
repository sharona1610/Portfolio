import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import $ from 'jquery';
import { Button, Card, Row, Col, Modal, Panel, Carousel} from 'react-bootstrap';
// import { Button, Card, Row, Col, Modal, Grid } from 'react-materialize';


class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      project: ['airbnb-master','express-mongo-pet-shelter', 'Game'],
      showModal: false
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

  render() {
    return (
      <div>
        <div className="grid">
          <div className="row">

            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 sidebar">
              <div className='nav'>
                <img src='mail.png' className='icons' onClick={this.open.bind(this)}/>
                <a href='https://www.linkedin.com/in/sahaya-sharona-valluvan-76319582'><img src='linkedinblue.png' className='icons'/></a>
                <a href='https://github.com/sharona1610'><img src='GitHub.png' className='icons'/></a>
                <a href='https://medium.com/@sharona1610'><img src='medium.png' className='icons'/></a>
              </div>
              <div className='textSidebar'>
                <p className='highlight hvr-float-shadow'  onClick={this.handleClickHome.bind(this)}>Home</p><br />
                <p className='highlight hvr-float-shadow'  onClick={this.handleClickProjects.bind(this)}>Projects</p><br />
                <p className='highlight hvr-float-shadow'  onClick={this.handleClickSkill.bind(this)}>Skills</p><br />
                <p className='highlight hvr-float-shadow'  onClick={this.handleClickPastexp.bind(this)}>Former Avatar</p><br />
              </div>
            </div>
            <div id='main'>
            <Homepage />
            </div>
          </div>
        </div>
        <div className='static-modal'>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton >
          <Modal.Title><div>Contact me</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form action="https://formspree.io/sharona1610@gmail.com"
          method="POST">
          <p className='head'><label>Hi, what is your name? </label><input type="text" name="name" /><br /></p>
          <p className='head span'>How can i contact you?<br /></p>
          <p className='head'><label>Email: </label><input type="email" name="_replyto" /><br /></p>
          <p className='head'><label>Phone: </label><input type="text" name="phone" /><br /></p>
          <p className='head'><label>What can I help you with?</label><input type="text" name="Content" /><br /></p>
          <p className='head'><input type="submit" value="Send" /></p>
          </form>
          </Modal.Body>
          <Modal.Footer><Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
          </Modal>
          </div>
        <footer>Made with &hearts; and <span><img className='span' src='../react.png' /></span>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9400; Sharona Valluvan.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Content thieves will be bludgeoned</footer>
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
      <div className="col-lg-9 col-md-9 col-sm-9 flexType scroll">
        <Project5 />
        <Project4 />
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
        <p className='color1'>Full Stack Web Developer | Cost Engineer</p>
        </div>
        </Panel>
        <div className='bodyText'>
        <p className='trial'>Hello, Thanks for stopping by! <br /><br /></p>
        <br /><br /><br />
        <p>Feel free to navigate through the links to know more about me<br /><br />
        Or download my resume here! :)<br /><br />
        <a href="https://drive.google.com/file/d/0B8Ng63wKGxpzUy1xTkktbjFFcXc/view?usp=sharing" target="_blank">Download</a>
        </p>
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
    return(<div className='card project1 hvr-float-shadow' onClick={this.open.bind(this)}>
    <div id="mod" className='black'>
    <h2>BuszWatch</h2>
    <p>Real time Bus arrival time calculator</p>
    </div>
      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title><div className='modal-body-head'>BuszWatch</div></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Carousel className='carousel-pos'>
    <Carousel.Item className='carousel' >
      <img alt="550x250" src="project1-1.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project1-2.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project1-3.png"/>
    </Carousel.Item>
  </Carousel>
        <p className='modal-body-head'>What</p>
        <p>This website combines the Land Transport Authority (LTA) API with Google Maps in order to get details on the arrival times of selected bus routes at the selected stops</p>
        <p className='modal-body-head'>Why</p>
        <p>I personally, always found it difficut to catch my bus on time every morn on the way to class. Hence to cure this itch, I decided to build my first node application on this</p>
        <p className='modal-body-head'>How</p>
        <p>Node js, Express, Mongo DB, Mongoose, JavaScript, Html, Css, Materialize</p>
        <p className='modal-body-head'>Links</p>
        <a href='https://github.com/sharona1610/BuszWatch'><img className='modal-link' src='GitHub.png' /></a>
        <a href='https://buszwatch.herokuapp.com/'><img className='modal-link' src='web.jpeg' /></a>
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
    return(<div className='card project2 hvr-float-shadow' onClick={this.open.bind(this)}>
      <div id="mod" className='black'>
      <h2>Handy</h2>
      <p>Handymen freelancers Platform</p>
      </div>
      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title className='modal-body-head'>Handy</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Carousel className='carousel-pos'>
    <Carousel.Item className='carousel' >
      <img alt="550x250" src="project2-1.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project2-2.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project2-3.png"/>
    </Carousel.Item>
  </Carousel>
        <p className='modal-body-head'>What</p>
        <p>Handy is meant to be a platform for small scale handymen to be able to reach the techsavvy users who dont really know where to go to get repairs done around the house</p>
        <p className='modal-body-head'>Why</p>
        <p>This was a team project and we wanted to explore a bunch of features which we could incorporate ont oa simple platform and so came up with this idea of a freelancers site</p>
        <p className='modal-body-head'>How</p>
        <p>Rails, Ruby, PostgreSQL, HTML,CSS</p>
        <p className='modal-body-head'>Links</p>
        <a href='https://github.com/yisheng90/third-project'><img className='modal-link' src='GitHub.png' /></a>
        <a href='https://floating-retreat-48742.herokuapp.com/'><img className='modal-link' src='web.jpeg' /></a>
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
      <div className='card project3 hvr-float-shadow' onClick={this.open.bind(this)}>
        <div id="mod" className='black'>
        <h2>Tetris</h2>
        <p>The classic game of clearing blocks</p>
        </div>
        <div className='static-modal'>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton >
              <Modal.Title className='modal-body-head'>Tetris</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
            <Carousel className='carousel-pos'>
        <Carousel.Item className='carousel' >
          <img alt="550x250" src="project3-1.png"/>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img alt="550x250" src="project3-2.png"/>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img alt="550x250" src="project3-3.png"/>
        </Carousel.Item>
      </Carousel>
              <p className='modal-body-head'>What</p>
              <p>Tetris is a classic block building game built without using canvas. It can be played with the intention of clearing filled rows. The user can rotate the blocks move it left and right</p>
              <p className='modal-body-head'>Why</p>
              <p>When we were given the specifications for this project, I immediately got reminded of my childhood when I used to spend hours playing this game. I thought how cool would it be to build it myself and voila!</p>
              <p className='modal-body-head'>How</p>
              <p>JavaScript, HTML,CSS</p>
              <p className='modal-body-head'>Links</p>
              <a href='https://github.com/sharona1610/Tetris'><img className='modal-link' src='GitHub.png' /></a>
              <a href='https://sharona1610.github.io./'><img className='modal-link' src='web.jpeg' /></a>
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

class Project4 extends React.Component {
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
    return(<div className='card project4 hvr-float-shadow' onClick={this.open.bind(this)}>
    <div id="mod" className='black'>
    <h2>PikTalk</h2>
    <p>A travellers guide</p>
    </div>
      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title><div className='modal-body-head'>PikTalk</div></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Carousel className='carousel-pos'>
    <Carousel.Item className='carousel' >
      <img alt="550x250" src="project4-1.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project4-2.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project4-3.png"/>
    </Carousel.Item>
  </Carousel>
        <p className='modal-body-head'>What</p>
        <p>This website is meant to be a travellers guide. If you are travelling overseas in a country where you dont understand the mode of communication, just take a picture and upload to get translated text</p>
        <p className='modal-body-head'>Why</p>
        <p>Each time I travel to places where the mode of communication is not english I find it difficult to find directions. This website is meant to solve the same</p>
        <p className='modal-body-head'>How</p>
        <p>Google cloud Vision, Google translate, Node js, Express, Mongo DB, Mongoose, JavaScript, Html, Css, Materialize</p>
        <p className='modal-body-head'>Links</p>
        <a href='https://github.com/sharona1610/piktalk'><img className='modal-link' src='GitHub.png' /></a>
        <a href='https://piktalk.herokuapp.com/'><img className='modal-link' src='web.jpeg' /></a>
        </Modal.Body>
        <Modal.Footer><Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
        </Modal>
        </div>
      </div>

    )
  }
}

class Project5 extends React.Component {
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
    return(<div className='card project5 hvr-float-shadow' onClick={this.open.bind(this)}>
    <div id="mod" className='black'>
    <h2>Portfolio</h2>
    <p>A compilation of my work</p>
    </div>
      <div className='static-modal'>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton >
        <Modal.Title><div className='modal-body-head'>Portfolio</div></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Carousel className='carousel-pos'>
    <Carousel.Item className='carousel' >
      <img alt="550x250" src="project5-1.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project5-2.png"/>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <img alt="550x250" src="project5-3.png"/>
    </Carousel.Item>
  </Carousel>
        <p className='modal-body-head'>What</p>
        <p>My Portfolio!</p>
        <p className='modal-body-head'>Why</p>
        <p>Meant to be a compilation of my work and the progress that ive made in the ever changing tech field.</p>
        <p className='modal-body-head'>How</p>
        <p>React, JavaScript, Html, Css, Bootstrap</p>
        <p className='modal-body-head'>Links</p>
        <a href='https://github.com/sharona1610/portfolio'><img className='modal-link' src='GitHub.png' /></a>
        <a href='https://sharona1610.github.io/portfolio'><img className='modal-link' src='web.jpeg' /></a>
        </Modal.Body>
        <Modal.Footer><Button onClick={this.close.bind(this)}>Close</Button>
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
      <div className='skills scroll'>
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
            <div className='outer'><img className='logo' src='react.png' />
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
      <div className='pastBody'>
      <h4>Education</h4><hr />
      <ul><li className='modal-body'>Web development Immersive at General Assembly, Singapore</li>
      <li className='modal-body'>Post Graduate Certification in Management from XLRI, Jamshedpur, India</li>
      <li className='modal-body'>Bachelor of Engineering - Electrical and Electronics (2008-2012)</li></ul>
      <h4> Work Experience</h4><hr />
      <h5>Danfoss industries (2015 - 2016) – Product Cost Engineer, Supply Chain. </h5><hr />
      <ul>
      <li className='modal-body'>Responsible for costing of electrical and sheet metal parts
      and negotiations with global suppliers.</li>
      <li className='modal-body'>Mastered and extensively used the proprietary
      programming language of 'aPriori' to create customized
      cost estimating models specific to the company</li></ul>
      <h5>Ashok Leyland (2012 - 2015) – Cost engineer.</h5><hr />
      <ul><li className='modal-body'>Achieved annualized savings of 0.24 million SGD on a
      family of parts through cost saving measures and value
      analysis.</li>
      <li className='modal-body'>Responsible for costing of automotive electrical parts</li>
      <li className='modal-body'>Developed Excel VBA Macros to automate certain aspects
      of cost estimation leading to increase in work efficiency
      by 18%</li></ul>
      </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);
