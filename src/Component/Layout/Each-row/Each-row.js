import React from 'react';
import './Eachrow.css';
import Icon from '../Icon/icon';

class EachRow extends React.Component {
  state = {
    plus: false,
    minus: false
  }

  componentWillMount() {
    this.disabledHandler(this.props);
  }

  componentWillReceiveProps(props) {
    this.disabledHandler(props);
  }

  disabledHandler = (props) => {
    let { name, number, total, limit } = props;
    const newNumber = parseInt(number);
    const newTotal = parseInt(total);
    const maxLimit = parseInt(limit);

    if(name === "ROOMS") { // If rooms is selected
      if(newNumber <= 1) this.setState({ minus: true });
      else if(newNumber >= maxLimit) this.setState({ plus: true });
      else this.setState({ plus: false, minus: false });
    } else if(name === "ADULTS") { // If adults is selected
      if(newNumber <= 1) this.setState({ minus: true });
      else this.setState({ plus: false, minus: false });
      if(newTotal >= maxLimit) this.setState({ plus: true });
      else this.setState({ plus: false });
    } else { // If children is selected
      if(newNumber <= 0) this.setState({ minus: true });
      else this.setState({ plus: false, minus: false });
      if(newTotal >= maxLimit) this.setState({ plus: true });
      else this.setState({ plus: false });
    }
  }

  handler = (name, icon) => {
    this.props.handler(name, icon);
  }

  render() {
    const { name, icon, number } = this.props;
    const { plus, minus } = this.state;
    return (
      <div className="d-flex justify-content-between">
          <div className="d-flex">
              <Icon name={icon}/>
              <h2 className="m-0">{name}</h2>
          </div>
          <div className="d-flex">
              <button className="same btn btn-danger" onClick={() => this.handler(name,'minus')} disabled={minus}>-</button>
              <span className="same my-0 mx-2 text-center pt-2">{number}</span>
              <button className="btn btn-danger same" onClick={() => this.handler(name,'plus')} disabled={plus}>+</button>
          </div>
      </div>
    );
  }
  
}

export default EachRow;
