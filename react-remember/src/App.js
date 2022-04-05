import React from "react";
import './App.css';
import Switcher from './components/Switcher';
import sad from './components/sad.png';
import smile from './components/smile.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: true,
      moodText: 'smile',
    }
  }

changeBgc = () => {
this.setState({
  bgc: this.state.bgc === 'smile' ? 'sad' : 'smile',
  mood: !this.state.mood,
  moodText: this.state.moodText === 'smile' ? 'sad' : 'smile',
})
}


render() {
  const {moodText, mood} = this.state;
  const moodPic = mood ? smile : sad
  return (
    <div className={moodText}>
      <Switcher bgColor={moodText} changeParentBackground={this.changeBgc} moodText={moodText} moodPic={moodPic}/>
    </div>
  );
}
}

export default App;