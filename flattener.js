var uglyArray =  [[1,2,[3,[5]]],4]; 


function flatten(items) {
    const flat = [];
  
    items.forEach(function(item) {
      if (Array.isArray(item)) {
        console.log(flat);
        flat.push(...flatten(item));    
console.log(flat);
      } else {
        flat.push(item);
        
      }
    });

    return flat;
  }

flatten(uglyArray);