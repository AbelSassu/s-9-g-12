import { Component } from "react";

class Img extends Component {
    render() {
        return <img src={this.props.imageSrc} alt={this.props.altText} />;
    }
}

export default Img;
