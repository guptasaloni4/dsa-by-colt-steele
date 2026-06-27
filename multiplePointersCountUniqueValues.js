
//method 1
function countUniqueValues(arr){
  // add whatever parameters you deem necessary 
  
  if(arr.length <=1){
      return arr.length;
  }
  let count=0;
  let i=0, j=1;
  while(i<arr.length-1){
      if(arr[i]===arr[j]){
          i++;
          j++;
      }
      else{
          count++;
          i++;
          j++;
      }
      
  }
  return count+1;
}

//method 2

function countUniqueValues(arr){
  // add whatever parameters you deem necessary 
  
  if(arr.length <=1){
      return arr.length;
  }
  let count=0;
  let i=0, j=1;
  while(i<arr.length-1){
      if(arr[i]===arr[j]){
          j++;
      }
      else{
          count++;
          let temp = j;
          i = j;
          j = temp++;
      }
      
  }
  return count+1;
}