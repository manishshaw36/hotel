import React from 'react';
import EachRow from '../Layout/Each-row/Each-row';
import Icon from '../Layout/Icon/icon';


class App extends React.Component{
  state = {
    rooms: 1,
    adults: 1,
    children: 0
  }

  handler = (name, icon) => {
    name = name.toLowerCase();
    let value = this.state[name];
    if (icon === "plus") value += 1;
    else value -= 1;
    this.setState({ [name]: value });
    this.checkConstraints(name, icon);
  }

  checkConstraints = (name, icon) => {
    const { adults, children, rooms } = this.state;
    let total = adults + children;

    if (name !== 'rooms' && icon === "plus")
      total+=1;
    
    if(name === 'rooms' && icon === 'minus' && parseInt(total/4) >= rooms-1 ) {
      if(children !== 0) {
        const noOfChildren = (rooms-1)*4-adults;
        this.setState({ children: noOfChildren > 0 ? noOfChildren : 0 });
        if(adults > (rooms-1)*4)
          this.setState({ adults: adults-(adults%4) })
      } else {
        adults%4 === 0 ?
          this.setState({ adults: adults-4 }) :
          this.setState({ adults: adults-(adults%4) });
      }
    }
    else if(name === 'rooms' && total <= rooms && icon === "plus")
      this.setState({ adults: adults+1 });
      
    else if (parseInt((total-1)/4)+1 > rooms && icon === "plus")
      this.setState({ rooms: parseInt(total/4)+1 });

    else if(total <= rooms) 
      this.setState({ rooms: total-1 })
  }

  render() {
    const { adults, children, rooms } = this.state;
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
          />
          <hr className="mb-4"/>
          <EachRow 
            name="ADULTS" 
            number={adults} 
            icon="user" 
            handler={this.handler} 
            total={total} 
            limit={20}
          />
          <hr className="mb-4"/>
          <EachRow 
            name="CHILDREN" 
            number={children} 
            icon="child" 
            handler={this.handler} 
            total={total} 
            limit={20}
          />
        </div>
      </div>
    );  
  }
}

export default App;
