/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    let palindromeArray=[];

    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            if(isPalindrome(s.substring(i,j))){
                palindromeArray.push(s.substring(i,j))
            }
        }
    }
    palindromeArray.sort((a,b)=>b.length-a.length);
    if(palindromeArray.length!=0) return palindromeArray[0];
    else return "";

};


var isPalindrome=(string)=>{
    let isTrue=true;

    for(let i=0,j=string.length-1;i<string.length;i++,j--){
        if(string[i]!=string[j]) {
            isTrue=false;
            break;
        }
    }
    // console.log(isTrue);
    return isTrue;
}


var obj=new longestPalindrome("abba");




