import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Player from "./components/Players";
import NavBar from "./components/Navbar";

class App extends React.Component {
  state = {
    player: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("Component did mount is running", res);
        this.setState({
          player: res.data
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <div>
          <Player player={this.state.player} />
        </div>
      </div>
    );
  }
}

export default App;
