import React, { Component } from 'react';
import WrapperComponent from './global/wrapper.component';
import HomeComponent from './components/home/home.component';

class App extends Component {
  render() {
    return (
      <WrapperComponent>
          {/* routing */}
          <HomeComponent/>
      </WrapperComponent>
    );
  }
}

export default App;