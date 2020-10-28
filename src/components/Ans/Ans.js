import React from 'react';
import './Ans.css';

class Ans extends React.Component{

  render(){
    const {answer, i, j} = this.props;
    return (
      <div className="form-check">
        <input className="form-check-input" type="radio" name={i} value={j}
        onChange={this.props.answerTest}/>
        <label className="form-check-label">
          {answer}
        </label>
      </div>
    );
  }
}

export default Ans;
