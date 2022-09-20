/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    let longestPstring=""
    for(let i=0;i<s.length;i++){
        let oddPalindrome= determinePalindrome(s,i,i);
        let evenPalindrome=determinePalindrome(s,i,i+1);
        
        if(oddPalindrome.length>evenPalindrome.length && oddPalindrome.length>longestPstring.length) longestPstring=oddPalindrome;
        else if(evenPalindrome.length>oddPalindrome.length && evenPalindrome.length>longestPstring.length) longestPstring=evenPalindrome;
    }
    console.log(longestPstring);
    return longestPstring;

};

var determinePalindrome=(string,leftIndex,rightIndex)=>{

    let returnString="";
        while(leftIndex>-1 && rightIndex<string.length && string[leftIndex]==string[rightIndex]){
            returnString=string.slice(leftIndex,rightIndex+1);
            leftIndex--;
            rightIndex++;
        }
    return returnString;
}


longestPalindrome("babad");
//babad

//abba

