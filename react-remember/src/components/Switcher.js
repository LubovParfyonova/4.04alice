import React from "react";
import './Switcher.css';

class Switcher extends React.Component {
    constructor(props){
        super(props);
       
    }

     clickHander = () => {
        this.props.changeParentBackground();
    }

    render() {
        const {bgColor, moodText, moodPic} = this.props;
        const cn = `switcher-container ${bgColor}`;
  
        return (
            <div className={cn}>
                <img src={moodPic}/>
                <h1>I am {moodText}</h1>
                <button onClick={this.clickHander}>Click me!</button>
            </div>
        )
    }
}

export default Switcher



// Три типа взаимодействия компонент
// Parent -> Child - props
// Child -> Parent - callback
// Child -> Child (Sibling) - Parent