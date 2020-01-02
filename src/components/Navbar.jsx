import React, { Component } from "react";
import { Link } from "gatsby";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }
  render() {
    let isActiveClass = "navbar-menu ";
    if (this.state.isActive) {
      isActiveClass += "is-active";
    }
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={isActiveClass}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
