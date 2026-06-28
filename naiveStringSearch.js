function naiveStringSearch(str, substr){ //long short
    let match=0;
    for (let i =0; i<str.length; i++){ 
        for (let j=0; j<substr.length; j++){
            if(substr[j]!=str[i+j]) break;
            if(j===substr.length-1) match++;
        }
    }
    return match;
}