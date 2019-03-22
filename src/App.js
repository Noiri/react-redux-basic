import React, { Component } from 'react';

//クラスコンポーネント
class App extends Component {
  render() {
    return(
		<React.Fragment>
			<div>Hello, world!</div>
			<input type="text" onChange={() => {console.log("I am clicke!");}} />
		</React.Fragment>
	)
  }
}


export default App;
