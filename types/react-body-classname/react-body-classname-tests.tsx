import * as React from "react";
import BodyClassName = require("react-body-classname");

class SomeComponent {
  render() {
    // This will add 'home' to the body
    return (
      <BodyClassName className='home'>
        <h1>Home, sweet home.</h1>
      </BodyClassName>
    );
  }
}

class App {
  render() {
    // This will add 'app' to the body
    return (
      <BodyClassName className='app'>
        <div/>
      </BodyClassName>
    );
    // Becuase we nested the component, our body will now have 'app home'
    // as the class name
  }
}
