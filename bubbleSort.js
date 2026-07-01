function bubbleSort(arr){
    let noswaps; //for almost sorted array
    for (let i=0; i<arr.length-1; i++){
        noswaps=true;
        for (let j=0; j<arr.length-i-1; j++){
            console.log(j);
            if(arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]]; //js way of swapping values
                noswaps=false;
                console.log(arr, "swaps");
            } 
        }
        if(noswaps){
            break;
        }
    }
    return arr;
}

//console.log(bubbleSort([2,13,5,3,8,6,12,1,4]));
console.log(bubbleSort([8,1, 2, 3, 4, 5]));