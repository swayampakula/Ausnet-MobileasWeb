import React from 'react';
import { Input,Icon,Button, Segment  } from 'semantic-ui-react';

export default class applicationView extends React.Component {
	constructor () {
		super();
		this.state = {
			focus:false,
			opName:'',
			rpName:'',
			version:'',
			tick:true,
			show:false,
			enter:false,
			initiate:true
		}
	}

	handleoperator=(e) => {
		this.setState({opName:e.target.value});
		this.setState({focus:true});
		
	}
	handleRecipient=(e) => {
		this.setState({rpName:e.target.value});
		this.setState({focus:true});
		
	}
	handleVersion=(e) => {
		this.setState({version:e.target.value});

		if(e.target.value == '' )
		{this.setState({tick:true});}
		else{this.setState({tick:false});}
		
	}
	handleInitiateJob = (event)=> {
		this.setState({initiate:false });
		this.setState({enter:true});
	}

	handleClick =(e)=> {
		this.setState({show:true});
		this.setState({enter:false})
	}

	render () {
		const upcomingJobs = (
			<div>
					<Segment>
						<div className="row">
                            <h4>Application Number </h4>
                            <p>#339525</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h4>Schedule </h4>
                            <p>Start: 04:00 hrs</p>
                            <p>End: 16:00 hrs</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h4>Location </h4>
                            <p>WOTS12 S/D OSBOURNE</p>
                            <p>KENDALLS/S @ WODONGA</p>
                        </div>
                        <br/>
						<div className="row">
								<Button primary onClick={this.handleInitiateJob.bind(this)}>Initiate Job</Button>
						</div>			
	 				</Segment >
	 				<Segment inverted>
	 						<div className="row">
                            <h4>Application Number </h4>
                            <p>#339590</p>
                        </div>
	 				</Segment>
	 				<Segment>
	 						<div className="row">
                            <h4>Application Number </h4>
                            <p>#339599</p>
                        </div>
	 				</Segment>
	 				<Segment>
	 						<div className="row">
                            <h4>Application Number </h4>
                            <p>#33961</p>
                        </div>
	 				</Segment>
				</div>

			);
		const applicationDetails = (
		<div>
			<div style={{marginTop:"30px",marginLeft:"50px"}}>
				<div className="row">
					<h4>Application Number </h4>
					<p>#339325</p>
				</div>
				<div className="row">
					<h4>Schedule </h4>
					<p>Start:</p>
					<p>End:</p>
				</div>
				<div className="row">
					<h4>Location </h4>
					<p>enter the location</p>
				</div>
			</div>
			<br />
			<hr />
			<div style={{marginTop:"30px",marginLeft:"50px"}}>
				<div className="row2">
					<h4>Operator Name </h4>
					<Input 
							focus={this.state.focus}
							onChange={this.handleoperator.bind(this)} />

				</div>
				<div className="row2">
					<h4>Recipient Name </h4>
					<Input 
							focus={this.state.focus}
							onChange={this.handleRecipient.bind(this)} />

				</div>
				<div className="row2">
					<h4>Operating Authority Number </h4>
					undughbdskdjeuih-  <input 
											focus={this.state.focus}
											size='mini'
											onChange={this.handleVersion.bind(this)} />
											<Icon  name='check circle' 
												disabled={this.state.tick}
												size="large"
												color="blue"/>
				</div>
				<div className="row2">
					<Button primary onClick={this.handleClick.bind(this)}>Submit</Button>
				</div>
			</div>
		</div>
	);
	const displayJobDetails = (	
		<div>
			<div style={{marginTop:"30px",marginLeft:"50px"}}>
				<div className="row">
					<h4>Application Number </h4>
					<p>#339325</p>
				</div>
				<div className="row2">
					<h4>Application Authority Number </h4>
					undughbdskdjeuih- {this.state.version} <Icon  name='check circle' 
												size="large"
												color="blue"/>
				</div>
				<div className="row">
					<h4>Schedule </h4>
					<p>Start:</p>
					<p>End:</p>
				</div>
				<div className="row">
					<h4>Location </h4>
					<p>enter the location</p>
				</div>
				<div className="row2">
					<h4>Operator Name </h4>
					{this.state.opName}

				</div>
				<div className="row2">
					<h4>Approval Status</h4>
					

				</div>
			</div>
		</div>
	);
		return (
			<div>
				{this.state.initiate ? upcomingJobs : null}
				{this.state.enter? applicationDetails : null}
				{this.state.show ? displayJobDetails : null}
			</div>
		);
	}
}
