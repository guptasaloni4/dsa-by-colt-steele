function binarySearch(arr, n){
  //create left and right pointer and set it to 0 and end respectively.
  //while l<r search for n
  let l=0; 
  let r=(arr.length)-1;
  
  while(l <= r){
    let mid=Math.floor((l+r)/2);
     if(arr[mid]===n){
          return mid;
      }
      else if(arr[mid]>n){
          r = mid-1;
      }
      else{
          l = mid+1;
      }
  }
  return -1;

}