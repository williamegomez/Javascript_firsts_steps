export function generateRandomColor(){
    var R = Math.floor(Math.random()*255)+1;
    var G = Math.floor(Math.random()*255)+1;
    var B = Math.floor(Math.random()*255)+1;
    return {
        r: R,
        g: G,
        b: B,
    }
}


export function filterNegativeNumbers(CArray){
    var ArraytoFilter = CArray;
    var Filtered = new Array;
    for(var i=0;i<ArraytoFilter.length;i++){
        if(ArraytoFilter[i]>=0){
            Filtered.push(ArraytoFilter[i]);
        }
    }
    return Filtered;
}

export function functionalFilterNegativeNumbers(CArray){
    var ArraytoFilter = CArray;
    return ArraytoFilter.filter(number => number >= 0);
}

export function mapNumbersIntoStrings(CArray){
    var ArraytoFilter = CArray;
    var Filtered = new Array;
    for(var i=0;i<ArraytoFilter.length;i++){
            Filtered.push(ArraytoFilter[i].toString());
    }
    return Filtered;
}

export function functionalMapNumbersIntoStrings(CArray){
    var ArraytoFilter = CArray;
    return ArraytoFilter.map(number => number.toString());
}

export function printType(variable){
    console.log(typeof(variable));
}

export function isPalindrome(CArray){
    var ArraytoCheck = CArray;
    ArraytoCheck= ArraytoCheck.toLowerCase();
    var ispal = true;
    for(var i=0;i<Math.floor(ArraytoCheck.length/2);i++){
        if(ArraytoCheck[i] !=  ArraytoCheck[ArraytoCheck.length-i-1]){
            ispal = false;
        }
    }
    return ispal;
}

export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }
}

export function printOutPersonAge(Personita){
    console.log(Personita.name);
}
