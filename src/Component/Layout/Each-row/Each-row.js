import React from 'react';
import './Eachrow.css';
import Icon from '../Icon/icon';

class EachRow extends React.Component {

  componentWillMount() {
    this.props.disabledHandler(this.props);
  }

  componentWillReceiveProps(props) {
    let { number, disabledHandler, total } = this.props;
    if(number !== props.number || total !== props.total) disabledHandler(props);
  }
 
  handler = (name, icon) => {
    this.props.handler(name, icon);
  }

  render() {
    const { name, icon, number, plus, minus } = this.props;
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
