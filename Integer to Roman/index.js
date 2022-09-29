/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {

     const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    const value = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

        let ans = ""
        for (let i = 0; num; i++){
            console.log(i);
            while (num >= val[i]){ 
                ans += rom[i]
                num -= val[i]
            }
        }
        return ans
 

};


console.log(intToRoman(1994));