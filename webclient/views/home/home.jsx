import React from 'react';

import View from '../../components/applicationView';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return <View message='React Sample'></View>
	}
}