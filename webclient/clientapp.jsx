import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './views/home';

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
		</Router>,
  	document.getElementById('mountapp')
);