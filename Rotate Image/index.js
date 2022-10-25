//Problem Statement

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix
// and do the rotation.

let rotator=(inp)=>{
    let cpy=inp.map((x)=>x.map((y)=>y));
    let length=cpy.length-1;
    
    for(let i=0;i<cpy.length;i++){
        for(let j=0;j<cpy[i].length;j++){
            inp[j][length-i]=cpy[i][j];
        }
    }
}








let input=[[1,2,3],[4,5,6],[7,8,9]];
let input2= [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
let output=[[7,4,1],[8,5,2],[9,6,3]]
rotator(input2);
