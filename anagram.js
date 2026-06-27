//anagram

function anagram( arr, str){
    if(arr.length != str.length){
        return false;
    }

    var frqCount1 = {};
    var frqCount2 = {};

    for (let char of arr){
        frqCount1[char] = (frqCount1[char] || 0) + 1;
    }

    for (let char of str){
        frqCount2[char] = (frqCount2[char] || 0) + 1;
    }

    for (let i in frqCount1){
        if(frqCount1[i] != frqCount2[i]) return false;
    }
    return true;
}

// quick tests
console.log(anagram("abc", "cba")); // true
console.log(anagram("aabb", "abab")); // true
console.log(anagram("aabb", "ab")); // false