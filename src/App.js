import React, { Component } from 'react';
import MyName from './Component/MyName';
import Counter from './Component/Counter';

class App extends Component{
  render(){
    return (
//      <MyName name="이름" sex="성별" />
      <Counter />
    );
  }
}

export default App;
