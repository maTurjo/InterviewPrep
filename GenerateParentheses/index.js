/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let pArray=[];
    for(let i=0;i<n;i++){
        pArray.push("(");
        pArray.push(")");
    }

    return pArray;


};

let input1=3;

console.log(generateParenthesis(3))