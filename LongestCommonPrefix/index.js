/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    console.clear();
    let sortedArray=strs.sort((a,b)=>b.length-a.length);
    let longestPrefix=sortedArray[sortedArray.length-1];
    sortedArray.forEach((item,index)=>{
        for(let i=0;i<item.length;i++){
            if(longestPrefix[i]!=item[i]){
                 longestPrefix=longestPrefix.substring(0,i);
                break;
            }
        }
    })
    console.log(longestPrefix);

};





let input=["flower","flow","flight"]
let input2=["dog","racecar","car"]

longestCommonPrefix(input);