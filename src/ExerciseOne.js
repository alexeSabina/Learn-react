import './ExerciseOne.css';
import React from 'react';

class GetText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '', 
			disabled: true,
			show: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus  = this.handleFocus.bind(this);
		this.handleBlur   = this.handleBlur.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePaste   = this.handlePaste.bind(this);
	}

	handleChange(event) {    
		this.setState({value: event.target.value});  
	}
	handleFocus(event) {
		this.setState({disabled: false});
	}
	handleBlur(event) {
        if(this.state.value !== '') {
			this.setState({disabled: false});
            return
		}
        this.setState({disabled: true});
	}
	handlePaste(event) {
		console.log(event.clipboardData.getData('Text'));
		let copiedTxt = event.clipboardData.getData('Text');
		this.setState({value: copiedTxt + copiedTxt + event.target.value});  
		event.preventDefault();

	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({show: this.state.value});
	}

	render() {
		return (
			<div className="content content-1" >
				<form onSubmit={this.handleSubmit} >
					<input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} onPaste={this.handlePaste} />
					<input type="submit" value="Submit" disabled={this.state.disabled}/>
				</form>
				<h2>{this.state.show}</h2>
			</div>
		);
	}
}

function ExerciseOne() {
	return (
		<GetText />
	);
}

export default ExerciseOne;