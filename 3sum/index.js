
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let sortedArray=nums.sort((a,b)=>a-b);
    
    let resultArray=[];
    let resultObjectArray=[];
    for(let i=0;i<sortedArray.length;i++){
        let targetValue=0-sortedArray[i];

        let leftPointer=i+1;
        let rightPointer=sortedArray.length-1;
        
        while(rightPointer>leftPointer){
            if(sortedArray[leftPointer]+sortedArray[rightPointer]<targetValue){
                leftPointer++;
            }
            else if(sortedArray[leftPointer]+sortedArray[rightPointer]>targetValue){
                rightPointer--;
            }
            else if(sortedArray[leftPointer]+sortedArray[rightPointer]===targetValue){
                let duplicateFound=false;
                let itemArray=[sortedArray[i],sortedArray[leftPointer],sortedArray[rightPointer]].sort((a,b)=>a-b)
                console.log(itemArray);
                for(let x=0;x<resultArray.length;x++){
                    if(resultArray[x][0]===itemArray[0] && resultArray[x][1]=== itemArray[1] && resultArray[x][2]===itemArray[2]){
                        duplicateFound=true;
                        break;
                    }
                }
                if(!duplicateFound){
                    resultArray.push(itemArray);
                }
                leftPointer++;
                rightPointer--;
            }
        }


    }
    // console.log(resultArray);
    return resultArray;
};



let input1=[-1,0,1,2,-1,-4];
let input2=[0,1,1];
let input3=[0,0,0,0];
let input4=[-2,0,1,1,2]

threeSum(input1);