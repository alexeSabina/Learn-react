import './ExerciseTwo.css';
import React from 'react';

const colors = {
    red: {
        backgroundColor: "#FF0000"
    },
    yellow: {
        backgroundColor: "#FFFF00"
    },
    green: {
        backgroundColor: "#008000"
    },
    grey: {
        backgroundColor: "#808080"
    }
};

const carNumbers = ["Car 1", "Car 2", "Car 3", "Car 4", "Car 5"];

function CreateCars(props) {
    const list = props.data;

    const updatedList = list.map((listItems)=>{
        return <div value={listItems.value}>{listItems}</div>;
    });

    return(
        <div className="cars" >{updatedList}</div>
    );
}

class Light extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            red: colors.red,
            yellow: colors.grey,
            green: colors.grey,
            next: 'yellow',
            cars: carNumbers
		};
	}

    handeLightChange(event) {
        switch (this.state.next) {
            case "red":
            this.setState({
                red: colors.grey,
                yellow: colors.grey,
                green: colors.green,
                next: 'green',
                cars: []
            });
            break;
            case "yellow":
            this.setState({
                red: colors.grey,
                yellow: colors.yellow,
                green: colors.grey,
                next: 'red',
                cars: this.chooseRandom()
            });
            break;
            case "green":
            this.setState({
                red: colors.red,
                yellow: colors.grey,
                green: colors.grey,
                next: 'yellow',
                cars: this.chooseRandom()
            });
            break;
        }
    }
    chooseRandom() {
        const res = [];
        for(let i = 0; i < Math.random() * carNumbers.length; ){
           const random = Math.floor(Math.random() * carNumbers.length);
           if(res.indexOf(carNumbers[random]) !== -1){
              continue;
           };
           res.push(carNumbers[random]);
           i++;
        };
        return res;
    };
  
    componentDidMount() {
        setInterval(() => { 
            this.handeLightChange();
        }, 5000);
    }

  
    render() {
        return (
            <div className="content content-2">
                <div className="light">
                    <div style = {this.state.red}/>
                    <div style = {this.state.yellow}/>
                    <div style = {this.state.green}/>
                </div>
                <CreateCars data = {this.state.cars} />
            </div>
        )
    }
}

function ExerciseTwo() {
	return (
		<Light />
	);
}

export default ExerciseTwo;