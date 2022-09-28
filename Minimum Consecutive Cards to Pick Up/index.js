/**
 * @param {number[]} cards
 * @return {number}
 */
 var minimumCardPickup = function(cards) {
    
    let found=false;
    let cardPairs=1000000;
    
    let refObj=new Object({});
    
    for(let i=0;i<cards.length;i++){
        if(refObj[cards[i]]==undefined) refObj[cards[i]]=[];
        refObj[cards[i]].push(i);
        
        if(refObj[cards[i]].length>1){
            found=true;
            let distance=0
            let v1=refObj[cards[i]][refObj[cards[i]].length-1]
            let v2=refObj[cards[i]][refObj[cards[i]].length-2]
            if(v1>v2){
                distance=v1-v2+1
            }else if(v2>v1){
                distance=v2-v1+1
            }
            if(distance<cardPairs){
                cardPairs=distance;
            }
        }
    }
    
    if(!found) return -1;
    return cardPairs;
};