export const disabledHandler = (props) => {
    let { name, number, total, limit, setValue } = props;
    const newNumber = parseInt(number);
    const newTotal = parseInt(total);
    const maxLimit = parseInt(limit);
    if(name === "ROOMS") { // If rooms is selected
      if(newNumber <= 1) setValue(name+'minus', true)
      else if(newNumber >= maxLimit) setValue(name+'plus', true)
      else {
        setValue(name+'minus', false);
        setValue(name+'plus', false)
      }
    } else if(name === "ADULTS") { // If adults is selected
      if(newNumber <= 1) setValue(name+'minus', true);
      else {
        setValue(name+'minus', false);
        setValue(name+'plus', false)
      }
      if(newTotal >= maxLimit) setValue(name+'plus', true);
      else setValue(name+'plus', false);
    } else { // If children is selected
      if(newNumber <= 0) setValue(name+'minus', true);
      else {
        setValue(name+'minus', false);
        setValue(name+'plus', false)
      };
      if(newTotal >= maxLimit) setValue(name+'plus', true);
      else setValue(name+'plus', false);
    }
}

export const checkConstraints = (props, name, icon) => {
    const { adults, children, rooms, setValue } = props;
    let total = adults + children;

    if (name !== 'rooms' && icon === "plus")
      total+=1;
    
    if(name === 'rooms' && icon === 'minus' && parseInt(total/4) >= rooms-1 ) {
      if(children !== 0) {
        const noOfChildren = (rooms-1)*4-adults;
        setValue('children', noOfChildren > 0 ? noOfChildren : 0);
        if(adults > (rooms-1)*4)
          setValue('adults', adults-(adults%4));
      } else {
        adults%4 === 0 && adults !== 4 ? 
          setValue('adults', adults-4) : 
          setValue('adults', adults-(adults%4));
      }
    }
    else if(name === 'rooms' && total <= rooms && icon === "plus")
      setValue('adults', adults+1)
      
    else if (parseInt((total-1)/4)+1 > rooms && icon === "plus")
      setValue('rooms', parseInt(total/4)+1 )

    else if(total <= rooms) 
      setValue('rooms', total-1 )
}