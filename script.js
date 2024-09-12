function Mission1(NumberArry) {
    let newArry =  NumberArry.filter(nr => nr % 2 === 0);
return newArry
}

console.log(Mission1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function Mission2(string){
    let sentence = "This is an example sentence";
let wordsArray = string.split(' ')
    let newArry =  wordsArray.filter(wr => wr.length  === 4);
return newArry.length
}

console.log(Mission2('ari gotlib i am 1234 123 5421 1 1234 54 5ag5'));

function Mission3(arry){
    let newArr = [];
    for(let i = 0; i < arry.length; i++){
        newArr = newArr.concat(arry[i]);
    }
    return newArr
}

console.log(Mission3([[-15,0,1],[2,'g',3],[4,'rtty',5],[5,6,7]]));


function Mission4(arry){
    if(arry.length < 2){
        return 'There is no way to know that there are less than two members in the array'
    }
    let fn = arry[0]
    let plus = 0
    let minus = 0
   for(let i = 1; i < arry.length; i++){
    if(arry[i] > fn){
        plus ++
    }
    else if(arry[i] < fn){
      minus ++
   };
   fn = arry[i]
   }
   if(plus > 0 && minus > 0){
    return 0
    }
    else if(plus > 0){
    return 1
    }
    else if (minus > 0){
    return 2
}
}

console.log(Mission4([1]));
console.log(Mission4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(Mission4([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]));
console.log(Mission4([8,9,45,62,20]));









module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}//Without 5 and 6