/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    console.clear();
    let maxArea=0;


    for(let i=0,j=height.length-1;i<height.length && j>0;){
        let width=j-i;
        let minHeight=returnMinimum(height[i],height[j])
        let area=minHeight*width;
        if(area>maxArea){
            maxArea=area;
        }    
        console.log(`${height[i]} * ${height[j]} * ${width} =${area} `);
        if(height[i]<=height[j]){ 
            i++;
            continue;
        }
        if(height[j]<height[i]) j--;
        
    }

    console.log(maxArea);
    return maxArea;
};



const returnMinimum=(num1,num2)=>{
    if(num1<num2) return num1;
    else if(num2<num1) return num2;
    else if(num1==num2) return num1;
    
}





let inputArray=[2,1]
maxArea(inputArray)