/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
    console.clear();
    console.log(dominoes);
    let dominosArray=dominoes.split("");
    for(let i=0;i<dominosArray.length;i++){
        if(dominosArray[i]=="L"){
            let previousRIndex=null;
            let previousLIndex=null;
            for(let k=i-1;k>=0;k--){
                if(dominosArray[k]==".") continue;
                if(dominosArray[k]=="R"){
                     previousRIndex=k;
                    break;
                }else if(dominosArray[k]=="L"){
                    previousLIndex=k;
                    break;
                }
            }
            let currentLIndex=i;
            if(previousRIndex!=null){
                while(previousRIndex<=currentLIndex){
                    if(currentLIndex==previousRIndex){
                        dominosArray[currentLIndex]="."
                        break;
                    }
                    dominosArray[previousRIndex]="R";
                    dominosArray[currentLIndex]="L"
                    currentLIndex--;
                    previousRIndex++;
                }
            }
            else if(previousLIndex !=null){
                while(previousLIndex<=currentLIndex){
                    dominosArray[previousLIndex]="L";
                    previousLIndex++;
                }
            }
            else{
                while(currentLIndex>=0){
                    dominosArray[currentLIndex]="L";
                    currentLIndex--;
                }
            }
        }
        if(dominosArray[i]=="R"){
            let nextRIndex=null;
            let nextLIndex=null;
            let currentRIndex=i;

            for(let k=currentRIndex+1;k<dominosArray.length;k++){
                if(dominosArray[k]=="."){continue}
                else if(dominosArray[k]=="R"){
                    nextRIndex=k;
                    break;
                }
                else if(dominosArray[k]=="L"){
                    nextLIndex=k;
                    break;
                }
            }

            if(nextLIndex){
                while(nextLIndex>=currentRIndex){
                    if(nextLIndex==currentRIndex) {
                        dominosArray[currentRIndex]=".";
                        break;
                    }
                    dominosArray[nextLIndex]="L";
                    dominosArray[currentRIndex]="R";
                    nextLIndex--;
                    currentRIndex++
                }
                i=nextLIndex;
            }
            else if(nextRIndex){
                while(currentRIndex<=nextRIndex){
                    dominosArray[currentRIndex]="R"
                    currentRIndex++;
                }
                i=nextRIndex-1;
            }
            else{
                while(currentRIndex<dominosArray.length){
                    dominosArray[currentRIndex]="R";
                    currentRIndex++;
                }
                i=currentRIndex;
            }

        }
        if(dominosArray[i]=="."){}
    }

    return dominosArray.join("");
};



let input1="RR.L";
let input2=".L.R...LR..L..";
let input3=".RR.."

console.log(pushDominoes(input3));