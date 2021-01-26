import React, { Component } from "react";
import "../../style/footer.sass";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col l3 offset-l1 s12">
              <h5 className="white-text">Top 10 List</h5>
              <p className="grey-text text-lighten-4">
                A trustworthy site that you can blindly rely on.
              </p>
            </div>
            <div className="col l3 offset-l1 s12">
              <h5 className="white-text">Contact Me</h5>
              <ul>
                <li>
                  <i className="fad fa-phone-alt"></i>
                  &nbsp; +917209431852
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="http://wa.me/917209431852"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                    &nbsp; +917209431852
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="mailto:sp.top10list@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fad fa-envelope"></i>
                    &nbsp; sp.top10list@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 offset-l1 s12">
              <h5 className="white-text">Support Me On</h5>
              <ul className="supportMe">
                <li>
                  <a href="https://www.buymeacoffee.com/amankumar">
                    <img
                      align="left"
                      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                      height="45"
                      alt="amankumar"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://paypal.me/amankumar062">
                    <img
                      align="left"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png"
                      height="45"
                      alt="amankumar"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row container center-align">
            <div className="col s12">
              <h5 className="white-text">Follow Me on </h5>
              <span className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100006823652391"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/amankumar062/"
                  target="_blank"
                  rel="noreferrer"
                  className="valign-wrapper"
                >
                  <img
                    src="https://res.cloudinary.com/dbvthtwhc/image/upload/v1605103035/instagram_d1s8a5.svg"
                    alt="Instagram"
                    width="29px"
                  />
                </a>
                <a
                  href="https://twitter.com/amankumar062"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.pinterest.com/amankumar062/boards/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
                <a
                  href="https://www.reddit.com/user/aman_kumar_0017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-reddit"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-kumar-50bba8184/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © 2020 Top10List All Rights Reserved
        </div>
      </footer>
    );
  }
}

export default Footer;
