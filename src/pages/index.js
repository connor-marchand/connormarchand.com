import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import me from '../assets/images/me.png'
import ship from '../assets/images/ship.png'
import java from '../assets/images/java.png'
import feather from '../assets/images/feather.png'
import cloud from '../assets/images/network.png'
import coding from '../assets/images/coding.png'
import git from '../assets/images/git.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const MAX_ITEMS = 1;

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  componentWillMount() {
    this.state = {
      isOpen: false,
    };

    this.items = [
      <div>
        <ul className="features">
          <li><span className="image"> <img src={java} alt="java" height="120px"/> </span>
          <h3>Java</h3>
          <p>Proficient in java development and using java to build applications</p>
          </li>
          <li><span className="image"> <img src={cloud} alt="cloud" height="120px"/> </span>
          <h3>Cloud Computing</h3>
          <p>Experienced in cloud computing platforms such as AWS.</p>
          </li>
          <li><span className="image"> <img src={ship} alt="ship" height="120px" /></span>
          <h3>Containers</h3>
          <p>Experienced with container services such as Docker and building scalable applications.</p>
          </li>
        </ul>
      </div>,
      <div>
        <ul className="features">
          <li><span className="image"> <img src={feather} alt="pom" height="120px"/> </span>
          <h3>Project Management</h3>
          <p>Proficient in project management tools such as Apache Maven.</p>
          </li>
          <li><span className="image"> <img src={git} alt="git" height="120px"/> </span>
          <h3>Git</h3>
          <p>Proficient in version control languages such as Git.</p>
          </li>
          <li><span className="image"> <img src={coding} alt="coding" height="120px"/> </span>
          <h3>Other Languages</h3>
          <p>Experienced in other languages such as Python, C++, JavaScript, and SQL.</p>
          </li>
        </ul>
      </div>
      ];
    }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  getRenderedItems() {
    if (this.state.isOpen) {
      return this.items;
    }
    return this.items.slice(0, MAX_ITEMS);
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Connor Marchand" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Hello! I am Connor, a software engineer based in Kansas City, MO
                  who loves to solve problems and occasionally create new things.
                  I am an experienced java developer who, at the moment, helps
                  create client facing applications.

                  I will graduate from <a href="https://www.rockhurst.edu/" target="_blank"> Rockhurst University</a> in May of 2020.

                </p>
                {/*<ul className="actions">*/}
                {/*  <li>*/}
                {/*    <Link to="/generic" className="button">*/}
                {/*      Learn More*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
              <span className="image">
                <img src={me} alt="me" />
              </span>
            </div>
          </section>

          <section id="skills" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>


            <div>
              {this.getRenderedItems().map((item, id) => (
                <div key={id}>{item}</div>
              ))}
              <a onClick={this.toggle} className="button">
                {this.state.isOpen ? 'Show Less' : 'Show More'}
              </a>
            </div>
          </section>


          <section id="experience" className="main special">
            <header className="major">
              <h2>Experience</h2>
            </header>
            <h2>DST Systems - Technical Intern: June 2018-Present</h2>
            <p className="content">
              <ul>
                <li>Java and Javascript development</li>
                <li>Ensure proper functionality and security of programs</li>
                <li>Meet with development teams communicating about what needs to be completed before the release of the program</li>
                <li>Worked closely with architecture assisting with migration of our product to AWS and reconfiguring our development pipeline and overall architecture</li>
                <li>Test Driven Development</li>
              </ul>
            </p>
          </section>

          {/*<section id="projects" className="main special">*/}
          {/*  <header className="major">*/}
          {/*    <h2>Personal Projects</h2>*/}
          {/*  </header>*/}
          {/*  <ul className="statistics">*/}
          {/*    <li className="style1">*/}
          {/*      <span className="icon fa-code-fork"></span>*/}
          {/*      <strong>5,120</strong> Etiam*/}
          {/*    </li>*/}
          {/*    <li className="style2">*/}
          {/*      <span className="icon fa-folder-open-o"></span>*/}
          {/*      <strong>8,192</strong> Magna*/}
          {/*    </li>*/}
          {/*    <li className="style3">*/}
          {/*      <span className="icon fa-signal"></span>*/}
          {/*      <strong>2,048</strong> Tempus*/}
          {/*    </li>*/}
          {/*    <li className="style4">*/}
          {/*      <span className="icon fa-laptop"></span>*/}
          {/*      <strong>4,096</strong> Aliquam*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*  <p className="content">*/}
          {/*    Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl*/}
          {/*    eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum*/}
          {/*    ac arcu sit amet, fermentum pellentesque et purus. Integer maximus*/}
          {/*    varius lorem, sed convallis diam accumsan sed. Etiam porttitor*/}
          {/*    placerat sapien, sed eleifend a enim pulvinar faucibus semper quis*/}
          {/*    ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer*/}
          {/*    eget purus nec nulla mattis et accumsan ut magna libero. Morbi*/}
          {/*    auctor iaculis porttitor. Sed ut magna ac risus et hendrerit*/}
          {/*    scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras*/}
          {/*    eu ornare dui curabitur lacinia.*/}
          {/*  </p>*/}
          {/*  <footer className="major">*/}
          {/*    <ul className="actions">*/}
          {/*      <li>*/}
          {/*        <Link to="https://github.com/connor-marchand" target="_blank" className="button">*/}
          {/*          Learn More*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </footer>*/}
          {/*</section>*/}

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact Me</h2>
              <p>
                I'd love to talk to you! You can email me, contact me on LinkedIn,
                <br />
                or you can take a look at my Github if you would like.
              </p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
