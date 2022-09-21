
let sessionIsRunning=false;
let breakIsRunning=false;
let timerIsRunning=false;

let sessionRunningIntervalId;
let breakRunningIntervalId;

let breakLength=parseFloat($("#break-length").text());
let sessionLength=parseFloat($("#session-length").text());
//  breakLength=0.05;
// sessionLength=0.05;

let breakLengthInMs=breakLength*60000;
let sessionLengthInMs=sessionLength*60000;

let displayeTime=new Date(sessionLengthInMs).toISOString().slice(14, 19);
console.log(7/2);
displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`


$("#time-left").text(displayeTime.toString());




$("#start_stop").on("click",()=>{
    timerIsRunning=!timerIsRunning;


    if(timerIsRunning){
        if(!sessionIsRunning && !breakIsRunning) startSession();
        else if(breakIsRunning) startBreak();
        else if(sessionIsRunning) startSession();
    }else{
        clearInterval(sessionRunningIntervalId);
        clearInterval(breakRunningIntervalId);
    }
    
    


})

function startSession(){
    timerIsRunning=true;
    sessionIsRunning=true;
    updateFlag()
    displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`
    $("#time-left").text(displayeTime.toString());
   
    sessionRunningIntervalId=setInterval(()=>{
        displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`
        $("#time-left").text(displayeTime.toString());
        sessionLengthInMs=sessionLengthInMs-1000
        displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`

        $("#time-left").text(displayeTime.toString());
        
        if(sessionLengthInMs<=-1){
            displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`
            $("#time-left").text(displayeTime.toString());

            breakLength=parseFloat($("#break-length").text());
            breakLengthInMs=breakLength*60000;

            sessionLength=parseFloat($("#session-length").text());
            sessionLengthInMs=sessionLength*60000;
            $('#beep').trigger("play");
            sessionIsRunning=false;
            resetSessionLength();
            clearInterval(sessionRunningIntervalId);
            clearInterval(breakRunningIntervalId);
            startBreak();
        }
    },1000)

}


function startBreak(){
    timerIsRunning=true;
    breakIsRunning=true;
    updateFlag()
    breakLength=parseFloat($("#break-length").text());
    if(breakLengthInMs<0){
        breakLengthInMs=breakLength*60000;
    }
    let breakDisplayeTime=`${('0'+parseInt(breakLengthInMs/60000)).slice(-2)}:${('0'+parseInt(breakLengthInMs/1000)%60).slice(-2)}`
    $("#time-left").text(breakDisplayeTime.toString());
    
    breakRunningIntervalId=setInterval(()=>{
        let breakDisplayeTime=`${('0'+parseInt(breakLengthInMs/60000)).slice(-2)}:${('0'+parseInt(breakLengthInMs/1000)%60).slice(-2)}`
        breakLengthInMs=breakLengthInMs-1000;
        breakDisplayeTime=`${('0'+parseInt(breakLengthInMs/60000)).slice(-2)}:${('0'+parseInt(breakLengthInMs/1000)%60).slice(-2)}`
        $("#time-left").text(breakDisplayeTime.toString());
   
        if(breakLengthInMs<=-1){
            let breakDisplayeTime=`${('0'+parseInt(breakLengthInMs/60000)).slice(-2)}:${('0'+parseInt(breakLengthInMs/1000)%60).slice(-2)}`
        $("#time-left").text(breakDisplayeTime.toString());
            sessionLength=parseFloat($("#session-length").text());
            sessionLengthInMs=parseInt(sessionLength*60000);


            breakLength=parseFloat($("#break-length").text());
            breakLengthInMs=parseInt(breakLength*60000);

            
            $('#beep').trigger("play");
            breakIsRunning=false;

            updateFlag();
            resetBreakLength();
            clearInterval(sessionRunningIntervalId);
            clearInterval(breakRunningIntervalId);
            startSession();
        }
        },1000)

}


$("#break-increment").on("click",()=>{
    if(timerIsRunning){
        if(breakLength==60) return
        breakLength++;
        updateBreakLength(breakLength);
    
    }else{
        if(breakLength==60) return
        breakLength++;
        updateBreakLength(breakLength);
        updateTimerData()

    }
})
$("#break-decrement").on("click",()=>{
    if(timerIsRunning){
        if(breakLength==1) return
        breakLength--;
        updateBreakLength(breakLength);
    }else{

        if(breakLength==1) return
        breakLength--;
        updateBreakLength(breakLength);
        updateTimerData()
    }
})
$("#session-increment").on("click",()=>{
    if(timerIsRunning){
        if(sessionLength==60) return
        sessionLength++;
        updateSessionLength();

    }else{

        if(sessionLength==60) return
        sessionLength++;
        updateSessionLength();
        updateTimerData()
    }
})
$("#session-decrement").on("click",()=>{
    if(timerIsRunning){
        if(sessionLength==1) return
        sessionLength--;
        updateSessionLength();
    }else{
        if(sessionLength==1) return
        sessionLength--;
        updateSessionLength();
        updateTimerData()
    }
})

$("#reset").on("click",()=>{
    
    $('#beep').trigger("pause");
    document.getElementById("beep").currentTime=0
    // $('#beep').currentTime(0);


    timerIsRunning=false;
    sessionIsRunning=false;
    breakIsRunning=false;

    clearInterval(sessionRunningIntervalId);
    clearInterval(breakRunningIntervalId);

    $("#session-length").text(25);
    $("#break-length").text(5);

    breakLength=parseFloat($("#break-length").text());
    sessionLength=parseFloat($("#session-length").text());

    resetBreakLength();
    resetSessionLength();

    let displayeTime=new Date(sessionLengthInMs).toISOString().slice(14, 19);

    $("#time-left").text(displayeTime.toString());
    updateFlag();
    $("#timer-label").text("Session")

})

function updateFlag(){
    if(timerIsRunning){
        if(sessionIsRunning){
            $("#timer-label").text("Session")
        }
        if(breakIsRunning){
            $("#timer-label").text("Break")
        }
    }
}


function updateSessionLength(){
    $("#session-length").text(sessionLength);
}
function updateBreakLength(){
    $("#break-length").text(breakLength);
}

function resetBreakLength(){
    breakLength=parseFloat($("#break-length").text());
    breakLengthInMs=parseInt(breakLength*60000);
}

function resetSessionLength(){
    sessionLength=parseFloat($("#session-length").text());
    sessionLengthInMs=parseInt(sessionLength*60000);
}

function updateTimerData(){
     sessionIsRunning=false;
     breakIsRunning=false;
     timerIsRunning=false;

    breakLength=parseFloat($("#break-length").text());
     sessionLength=parseFloat($("#session-length").text());

     breakLengthInMs=parseInt(breakLength*60000);
     sessionLengthInMs=parseInt(sessionLength*60000);

    //  displayeTime=new Date(sessionLengthInMs).toISOString().slice(14, 19);
    displayeTime=`${('0'+parseInt(sessionLengthInMs/60000)).slice(-2)}:${('0'+parseInt(sessionLengthInMs/1000)%60).slice(-2)}`

    $("#time-left").text(displayeTime.toString());
}