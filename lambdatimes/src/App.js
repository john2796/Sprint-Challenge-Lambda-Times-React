import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
