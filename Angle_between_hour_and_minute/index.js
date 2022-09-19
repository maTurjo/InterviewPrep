const angleCalculator=(H,M)=>{
    const changePerMinute=6;
    const changePerHour=30;
    const changePerHourUnit=6;

    let degreeOffset=M/12;
    let degreeInHour=(H*changePerHour)+(degreeOffset*changePerHourUnit);
    let degreeInMinute=M*changePerMinute;

    let changeInDegree;
    let inverseChangeInDegree;

    if(degreeInHour>degreeInMinute){
        changeInDegree=degreeInHour-degreeInMinute;
        inverseChangeInDegree=360-changeInDegree;
    }
    else{
        changeInDegree=degreeInMinute-degreeInHour;
        inverseChangeInDegree=360-changeInDegree;
    }

    if(changeInDegree>inverseChangeInDegree){
        // console.log(`inverse change is degree ${inverseChangeInDegree}`)
        return Math.floor(inverseChangeInDegree);
    }
    else {
        // console.log(`change is degree ${inverseChangeInDegree}`)
        return Math.floor(changeInDegree);
    }
    
}

console.log(angleCalculator(3,45));