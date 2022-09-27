/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  
    equalityArray=[];
    finalEqualityArray=[];
    let returnValue=true;

    for(let i=0;i<equations.length;i++){
    let lhs=equations[i][0];
    let rhs=equations[i][3];
    let isEquality=equations[i][1]=="="

    if(isEquality){
        
        let matchFound=false;
        equalityArray.forEach(element => {
            element.forEach((item,i)=>{
                if(item==lhs){
                     element.push(rhs);
                     matchFound=true;
                }
                else if(item==rhs){
                     element.push(lhs);
                     matchFound=true;
                }
            })
        });
        if(!matchFound) equalityArray.push([lhs,rhs]);
    }
}

equalityArray.forEach((element,index)=>{
    let j=index+1;
    for(let i=0;i<element.length;i++){
        if(equalityArray[j] && equalityArray[j].find(c=>c==element[i])){
            element=[...element,...equalityArray[j]];
            equalityArray[j]=[];
            equalityArray[index]=[...element];
            console.log(element);
            break;
        }
    }
})
console.log(equalityArray);
    
    for(let i=0;i<equations.length;i++){
        let lhs=equations[i][0];
        let rhs=equations[i][3];
        let isEquality=equations[i][1]=="="

        if(!isEquality){
            if(lhs==rhs) return false;
            equalityArray.forEach((element,i)=>{
                let lhsFound=false;
                let rhsFound=false;
                element.forEach((item,i)=>{
                    if(item==lhs) lhsFound=true;
                    if(item==rhs) rhsFound=true;
                })
                if(lhsFound==true && rhsFound==true){
                    returnValue=false;
                }
            })
        }
    }
// console.log(equalityArray);
    return returnValue;

  

};



let input1=["a==b","b!=a"];
let input2=["b==a","a==b"];
let input3=["a==b","b!=c","c==a"];
let input4=["a!=a"];
let input5=["f==d","b!=e","d!=c","b==c","b!=a","b!=f"];
let input6=["a==b","e==c","b==c","a!=e"];

console.log(equationsPossible(input5))
