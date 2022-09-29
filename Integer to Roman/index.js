/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {

    let numLeft=num;
    let romanObject=new Object({
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    });

    let refObject=new Object({
        I:0,
        V:0,
        X:0,
        L:0,
        C:0,
        D:0,
        M:0
    })
    let RomanArray=[];

    refObject.M=parseInt(numLeft/1000);
    numLeft=numLeft-(1000*refObject.M);
    refObject.D=parseInt(numLeft/500);
    numLeft=numLeft-(500*refObject.D);
    refObject.C=parseInt(numLeft/100);
    numLeft=numLeft-(100*refObject.C);
    refObject.L=parseInt(numLeft/50);
    numLeft=numLeft-(50*refObject.L);
    refObject.X=parseInt(numLeft/10);
    numLeft=numLeft-(10*refObject.X);
    refObject.V=parseInt(numLeft/5);
    numLeft=numLeft-(5*refObject.V);
    refObject.I=parseInt(numLeft/1);
    numLeft=numLeft-(500*refObject.D);

    console.log(refObject)

  


};


intToRoman(1994);