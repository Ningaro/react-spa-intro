import React from 'react';
import './Test.css';
import Ans from '../Ans/Ans';

class Test extends React.Component {
  state = {
    leftPage: false,
    onFocusState: true
  }
  componentDidMount() {
      window.addEventListener("focus", this.onFocus)
  }
  componentWillUnmount() {
    window.removeEventListener("focus", this.onFocus)
}
  onFocus = () => {
    setTimeout(() => this.setState({}), 1000);
    console.log("Пользовтаель покинул страницу");
    this.props.closeTest()
  }
  render() {
    const quest = this.props.quest;
    const { leftPage } = this.state;
    return (
      <div className="mb-3">
      <h5>{quest.title}</h5>
      {quest.ans.map((answer, i) => {
           return (<Ans key={i} answerTest={this.props.answerTest} answer={answer} i={quest.id} j={i} />)
        })}
      </div>
    );
  }
}

export default Test;
