import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false  }

  handleClick =() => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="head">
        <nav className="NavbarItems">
          <h2 className="logo">Suites</h2>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cNav} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
