import {Component} from 'react';
import Square from './SquareComponent';

class Parent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfBlacks: 0
        }
    }

    countBlack = (num) => {
        this.setState({
            numOfBlacks: this.state.numOfBlacks + num
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <h2>Count: {this.state.numOfBlacks} </h2>
                </div>
                <div className="row">
                    <Square counter={this.countBlack}/>
                    <Square counter={this.countBlack}/> 
                </div>
                <div className="row">
                    <Square counter={this.countBlack}/>
                    <Square counter={this.countBlack}/> 
                </div>
            </div>
        );
    }
}

export default Parent;