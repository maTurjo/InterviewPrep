/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

    //Comp Object
    let compObj={};

    //Checking row is valid

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(!compObj[board[i][j]] || compObj[board[i][j]] =="."){
                compObj[board[i][j]]=board[i][j]; 
            }else{
                console.log("repeat found in row");
                return false;
            }
        }
        compObj={};
    }


    //Checking column is valid
    compObj={};
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(!compObj[board[j][i]] || compObj[board[j][i]] =="."){
                compObj[board[j][i]]=board[j][i]; 
            }else{
                console.log("Repeat found in column");
                return false;
            }
        }
        compObj={};
    }

    //Checking in 3x3 boxes
    let complete=false;
    let cycle=0;
    compObj={};
    while(!complete){

        for(let i=0;i<board.length;i++){
            for(let j=cycle;j<cycle+3;j++){
                if(!compObj[board[i][j]] || compObj[board[i][j]] =="."){
                    compObj[board[i][j]]=board[i][j]; 
                }else{
                    console.log("Repeat found in square");
                    return false;
                }
            }
            if((i+1)%3==0){
                compObj={};    
            }
        }
        if(cycle<9) cycle=cycle+3;
        else complete=true;
    }
    console.log(true);
    return true;

};






let input1=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

let input2=[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

// isValidSudoku(input1);
isValidSudoku(input2);