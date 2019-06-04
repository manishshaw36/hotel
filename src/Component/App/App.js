import React from 'react';
import EachRow from '../Layout/Each-row/Each-row';
import Icon from '../Layout/Icon/icon';

import { connect } from 'react-redux';
import setValue from '../../actions/action';
import { disabledHandler, checkConstraints } from '../../common/function';

class App extends React.Component{

  handler = (name, icon) => {
    name = name.toLowerCase();
    let value = this.props[name];
    if (icon === "plus") value += 1;
    else value -= 1;
    this.props.setValue(name, value);
    checkConstraints(this.props, name, icon);
  }

  render() {
    const { 
      rooms, 
      adults, 
      children, 
      roomsPlus,
      roomsMinus,
      adultsPlus,
      adultsMinus,
      childrenPlus,
      childrenMinus, 
      setValue
    } = this.props;
    const total = adults + children;
    return (
      <div className="container w-50 my-5 mx-auto">
        <h2>
          <Icon name="users"/>
          Choose number of people
        </h2>
        <div className="border p-3">
          <EachRow 
            name="ROOMS" 
            number={rooms} 
            icon="bed" 
            handler={this.handler} 
            limit={5}
            plus={roomsPlus}
            minus={roomsMinus}
            setValue={setValue}
            disabledHandler={disabledHandler}
          />
          <hr className="mb-4"/>
          <EachRow 
            name="ADULTS" 
            number={adults} 
            icon="user" 
            handler={this.handler} 
            total={total} 
            limit={20}
            plus={adultsPlus}
            minus={adultsMinus}
            setValue={setValue}
            disabledHandler={disabledHandler}
          />
          <hr className="mb-4"/>
          <EachRow 
            name="CHILDREN" 
            number={children} 
            icon="child" 
            handler={this.handler} 
            total={total} 
            limit={20}
            plus={childrenPlus}
            minus={childrenMinus}
            setValue={setValue}
            disabledHandler={disabledHandler}
          />
        </div>
      </div>
    );  
  }
}
const mapStateToProps = (state) => {
  const { rooms, adults, children } = state.roomDetailsReducer;
  const { 
    roomsPlus,
    roomsMinus,
    adultsPlus,
    adultsMinus,
    childrenPlus,
    childrenMinus 
  } = state.signReducer;
  return {
    rooms, 
    adults, 
    children, 
    roomsPlus,
    roomsMinus,
    adultsPlus,
    adultsMinus,
    childrenPlus,
    childrenMinus 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (name, value) => {
      dispatch(setValue(name, value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
