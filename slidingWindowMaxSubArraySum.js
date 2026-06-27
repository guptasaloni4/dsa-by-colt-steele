function maxSubarraySum(arr, n){
  // add whatever parameters you deem necessary - good luck!
  if(n > arr.length ) return null;
  let max,sum=0, i=0, j=0;
  
  for ( i=0; i<n; i++){
      sum+=arr[i];
  }
  max = sum;
  for (j=n; j<arr.length ;j++){
      sum+= arr[j] - arr[j-n];
      if(sum>max){
          max=sum;
      }
  }
  return max;
  
} 