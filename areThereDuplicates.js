function areThereDuplicates( ...arr) { //added rest parameter '...' to handle variable num of argument
    let freqCount = {};
    
    for (let i of arr){
        freqCount[i]= (freqCount[i] || 0) + 1;
    }
    for(const [,count] of Object.entries(freqCount)){
        if(count > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'a', 't')); 
console.log(areThereDuplicates(1, 5, 3, 6, 2, 1, 6, 4)); 