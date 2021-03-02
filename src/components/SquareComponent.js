import { Component } from "react";

class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlack: 0,
            backgroundColor: "white"
        };
    }

    changeColor = () => {
        if (this.state.isBlack === 0) {
            this.setState({
                isBlack: 1,
                backgroundColor: "black"
            });
            this.props.counter(1);
        } else {
            this.setState({
                isBlack: 0,
                backgroundColor: "white"
            });
            this.props.counter(-1);
        }
    }

    render() {
        return(
            <div className="cell" style={{backgroundColor: this.state.backgroundColor}} onClick={this.changeColor}></div>
        );
    }
}

export default Square;