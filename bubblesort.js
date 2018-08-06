// array to sort
var items = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort(items) {
    //index length of 9 
    var arrayLength = items.length;
    //start looping over array
    //step one
    for (var firstLoopPosition = 0; firstLoopPosition < arrayLength; firstLoopPosition++) { 
        console.log( "outer count: " + firstLoopPosition)

        //step 2
        //start at first element again and run sub loop       //9 - 0 - 1  = 8  -> so stop just before the end so that you can check it's neighbor
      for (var secondLoopPosition = 0; secondLoopPosition < (arrayLength - firstLoopPosition - 1); secondLoopPosition++) { 
          console.log("inner loop count: " + secondLoopPosition + " going up to index " + (arrayLength - firstLoopPosition - 1))
          
    
        //Compare the neighboring positions positions  
        if(items[secondLoopPosition] > items[secondLoopPosition+1]) {
            console.log("comparing numbers " + items[secondLoopPosition+1] +" at index " + items.indexOf(items[secondLoopPosition+1]) + ' and ' + items[secondLoopPosition] + " at index " + items.indexOf(items[secondLoopPosition+1]))
            console.log(items)
          
          //if it is -> Swap the numbers 

          var tmp = items[secondLoopPosition];  //hold the current number to swap it
          items[secondLoopPosition] = items[secondLoopPosition+1]; //ovveride current value with neighboring value
          items[secondLoopPosition+1] = tmp; //ovveride original value with your temp variable


          
        }else {
          console.log("comparing numbers " + items[secondLoopPosition+1] +" at index " + items.indexOf(items[secondLoopPosition+1]) + ' and ' + items[secondLoopPosition] + " at index " + items.indexOf(items[secondLoopPosition+1]))
          console.log(items)
        }
        
      }        
    }
  console.log(items)
  }


bubbleSort(items);

//first loop doesnt start at 0