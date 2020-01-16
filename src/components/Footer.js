import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Say Hello!</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/connor-marchand"
            className="icon fa-github alt"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/connor-marchand-b3a194114/"
            className="icon fa-linkedin alt"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:connorlm1997@gmail.com"
            className="icon fa-envelope alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; 2020 Connor Marchand. Design: <a href="https://html5up.net">HTML5 UP</a>. Icons: <a href="https://www.flaticon.com/authors/freepik">Freepik</a>.
    </p>
  </footer>
)

export default Footer
