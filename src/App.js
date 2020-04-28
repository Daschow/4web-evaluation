import React, { Component } from "react";

import NavBar from "./layout/NavBar/Navbar";

import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15,
    };
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
