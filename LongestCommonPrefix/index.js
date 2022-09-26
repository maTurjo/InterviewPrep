/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    console.clear();
    let sortedArray=strs.sort((a,b)=>b.length-a.length);
    console.log(sortedArray);
    let longestPrefix=sortedArray[sortedArray.length-1];

    sortedArray.forEach((item,index)=>{
        for(let i=0;i<item.length;i++){
            if(longestPrefix.substring(0,i)==item.substring(0,i) && i+1>longestCommonPrefix.length){
                longestPrefix=item.substring(0,i);
                console.log(longestPrefix);
            }
        }
    })

};





let input=["flower","flow","flight"]

longestCommonPrefix(input);