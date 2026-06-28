function sameFrequency(x, y){

  let freqCount1 = {};
  let freqCount2 = {};
  
  while(x>0){
      let a = x%10;
      freqCount1[a] = (freqCount1[a] || 0 ) + 1; 
      x= Math.floor(x/10);
  }
  while(y>0){
      let a = y%10;
      freqCount2[a] = (freqCount2[a] || 0) + 1;
      y = Math.floor(y/10);
  }

  //****Objects do not have a .length. Use Object.keys(freqCount1).length and Object.keys(freqCount2).length, 
  // or compare properties directly.
  if(Object.keys(freqCount1).length != Object.keys(freqCount2).length) return false;
  
//   for (let i =0;i<freqCount1.length ;i++){
//       if(freqCount1[i]!= freqCount2[i]){
//           return false;
//       }
//   }
// Object iteration works like below*******
  for (let i in freqCount1){
      if(freqCount1[i]!= freqCount2[i]){
          return false;
      }
  }
  return true;
}
