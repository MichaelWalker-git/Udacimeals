import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
	state = {
		calendar: null
	};

	connect(mapStateToProps, mapDispatchToProps)(MyComponent)git

	render() {
		return (
      <div>
Hello World
      </div>
		)
	}
}
export default App