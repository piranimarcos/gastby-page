import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{color: '#3E7CB3'}}>Projects </h2>
          <p>
            <h3><span className="icon fa-cogs" style={{color: '#3E7CB3'}}></span> IOT</h3>
            Project with internet of things. Using Tcp servers

          </p>


          <p>
            <h3><span className="icon fa-cogs" style={{color: '#3E7CB3'}}></span> API</h3>
             Connectivity project with third-party apis

          </p>



          <p>
            <h3><span className="icon fa-cogs" style={{color: '#3E7CB3'}}></span> DEV</h3>
            General web development

          </p>


          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{color: '#3E7CB3'}}>About</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <h3 className="fondo">
            I like to program with the following technologies:
          </h3>

          <br/>
          
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> Javascript</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> NodeJS</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> ReactJS</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> NodeJs</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> PHP</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> MySql</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> MongoDB</h4>
            <h4><span className="icon fa-arrow-right" style={{color: '#3E7CB3'}}></span> Ionic</h4>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{color: '#3E7CB3'}}>Contact</h2>

          
          
          <h3><a href="mailto:marcos.pir94@gmail.com?subject=Contact-From-Landing-Page">marcos.pir94@gmail.com </a></h3>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ChinoPirani"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/Marcos2523" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/chinopirani" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/piranimarcos"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
