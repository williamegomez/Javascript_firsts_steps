

function generateRandomColor(){
    var R = Math.floor(Math.random()*255)+1;
    var G = Math.floor(Math.random()*255)+1;
    var B = Math.floor(Math.random()*255)+1;
    return {
        r: R,
        g: G,
        b: B,
    }
}

function filterNegativeNumbers(CArray){
    var ArraytoFilter = CArray;
    var Filtered = new Array;
    for(var i=0;i<ArraytoFilter.length;i++){
        if(ArraytoFilter[i]>=0){
            Filtered.push(ArraytoFilter[i]);
        }
    }
    return Filtered;
}

function FunctionalfilterNegativeNumbers(CArray){
    var ArraytoFilter = CArray;
    return ArraytoFilter.filter(number => number >= 0);
}

function mapNumbersIntoStrings(CArray){
    var ArraytoFilter = CArray;
    var Filtered = new Array;
    for(var i=0;i<ArraytoFilter.length;i++){
            Filtered.push(ArraytoFilter[i].toString());
    }
    return Filtered;
}

function FunctionalmapNumbersIntoStrings(CArray){
    var ArraytoFilter = CArray;
    return ArraytoFilter.map(number => number.toString());
}

function printType(variable){
    return typeof(variable);
}

function isPalindrome(CArray){
    var ArraytoCheck = CArray;
    var ispal = true;
    for(var i=0;i<Math.floor(ArraytoCheck.length/2);i++){
        if(ArraytoCheck[i] !=  ArraytoCheck[ArraytoCheck.length-i-1]){
            ispal = false;
        }
    }
    return ispal;
}

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }
}

var student = new Person("John",25);
student.printName();

function printOutPersonAge(Personita){
    console.log(Personita.name);
}

printOutPersonAge(student);