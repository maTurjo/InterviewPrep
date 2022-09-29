/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let refObj=new Object({});
    let distanceSet=new Set();
    let distanceArray=[];

    arr.forEach((item,index)=>{
        if(item>=x){
            if(!refObj[item-x]) refObj[item-x]=[];
            refObj[item-x].push(item);
            distanceSet.add(item-x);
        }else if(item<x){
            if(!refObj[x-item]) refObj[x-item]=[];
            refObj[x-item].push(item);
            distanceSet.add(x-item);
        }
        
    })

    for(let i=0;i<Number.MAX_SAFE_INTEGER + 1;i++){
        if(distanceArray.length==k) break;
        if(refObj[i] && distanceArray.length<k){
            refObj[i].forEach((item,index)=>{
                if(distanceArray.length<k){
                    distanceArray.push(item);
                }
            })
        }
    }

    // console.log(refObj);
    // console.log(distanceSet);
    // console.log(distanceArray);

    return distanceArray.sort((a,b)=>a-b);
};





let arr1=[1,2,3,4,5];
let k1=4;
let x1=3;

let arr2=[1,2,3,4,5];
let k2=4;
let x2=-1;

let arr3=[-2,-1,1,2,3,4,5];
let k3=7;
let x3=3;
console.log(findClosestElements(arr3,k3,x3))