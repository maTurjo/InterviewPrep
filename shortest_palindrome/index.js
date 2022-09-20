/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
    let string=s; //ananab
    let reverseString=""; //banana
    let stringToAdd="";
    for(let i=s.length-1;i>=0;i--){
        reverseString=reverseString.concat(s[i])
    }
    for(let i=0,j=s.length-1;i<s.length;i++,j--){
        let compS=s.slice(0,j+1);
        let startIndex=-(compS.length);
        let compR=reverseString.slice(startIndex);
        if(compR==compS){
            console.log(0,-startIndex);
             stringToAdd=reverseString.slice(0,(reverseString.length+startIndex));
            break;
        };

    }

    return stringToAdd.concat(s);
   
};




shortestPalindrome("ananab");