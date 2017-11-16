import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    printOutPersonAge,
    Person,
} from './firststeps.js'

describe('generateRandomColor', () => {
    it('Should have three properties "r", "g", "b"', () => {

        expect(generateRandomColor()).toHaveProperty('r');
        expect(generateRandomColor()).toHaveProperty('g');
        expect(generateRandomColor()).toHaveProperty('b');

    });
    

    it('Should not have values greater than 255 and lesser than 0, and be a integer', () => {

        for(var i=0;i<100;i++){
            var values = generateRandomColor();
            expect(values.r).toBeGreaterThanOrEqual(0);
            expect(values.r).toBeLessThanOrEqual(255);
            expect(values.g).toBeGreaterThanOrEqual(0);
            expect(values.g).toBeLessThanOrEqual(255);
            expect(values.b).toBeGreaterThanOrEqual(0);
            expect(values.b).toBeLessThanOrEqual(255);


            expect(typeof(values.r)).toMatch("number");
            expect(Math.trunc(values.r)).toEqual(values.r);
        }

    });
    
    it('Should not have length different from 3', () => {
        
        expect(Object.keys(generateRandomColor())).toHaveLength(3);

    });

    
});


describe('filterNegativeNumbers', () => {

    it('Should return empty arrays if only negative number are input', () => {
        
        expect(filterNegativeNumbers([-1])).toEqual([]);;
        expect(filterNegativeNumbers([-1,-1])).toEqual([]);

    });


    it('Should return only positive values if array has negative and positive values', () => {
        
        expect(filterNegativeNumbers([5])).toEqual([5]);;
        expect(filterNegativeNumbers([5,-1,4,5,-3])).toEqual([5,4,5]);

    });

    it('Should not modify input array', () => {
        var array1 = [1,2,3,-3,-4];
        filterNegativeNumbers(array1);
        expect(array1).toEqual([1,2,3,-3,-4]);
    });

});
  

describe('functionalFilterNegativeNumbers', () => {
    
    it('Should return empty arrays if only negative number are input', () => {
        
        expect(functionalFilterNegativeNumbers([-1])).toEqual([]);;
        expect(functionalFilterNegativeNumbers([-1,-1])).toEqual([]);

    });


    it('Should return only positive values if array has negative and positive values', () => {
        
        expect(functionalFilterNegativeNumbers([5])).toEqual([5]);;
        expect(functionalFilterNegativeNumbers([5,-1,4,5,-3])).toEqual([5,4,5]);

    });

    it('Should not modify input array', () => {
        var array1 = [1,2,3,-3,-4];
        functionalFilterNegativeNumbers(array1);
        expect(array1).toEqual([1,2,3,-3,-4]);
    });

});

describe('mapNumbersIntoStrings', () => {
    
    it('Should not modify input array', () => {
        var array1 = [1,2,3,-3,-4];
        mapNumbersIntoStrings(array1);
        expect(array1).toEqual([1,2,3,-3,-4]);
    });

    it('Should convert numbers in string', () => {
        var array1 = [1,2,3,-3,-4];
        expect(mapNumbersIntoStrings(array1)).toEqual(["1","2","3","-3","-4"]);
    });

});

describe('functionalmapNumbersIntoStrings', () => {
    
    it('Should not modify input array', () => {
        var array1 = [1,2,3,-3,-4];
        functionalMapNumbersIntoStrings(array1);
        expect(array1).toEqual([1,2,3,-3,-4]);
    });

    it('Should convert numbers in string', () => {
        var array1 = [1,2,3,-3,-4];
        expect(functionalMapNumbersIntoStrings(array1)).toEqual(["1","2","3","-3","-4"]);
    });

});
      
describe('printType', () => {
    it('Should print the correct type', () => {

        global.console = {
            warn: jest.fn(),
            log: jest.fn()
          }
          
        printType(1);
        expect(global.console.log).toHaveBeenCalledWith('number');

        printType("1");
        expect(global.console.log).toHaveBeenCalledWith('string');

        printType(true);
        expect(global.console.log).toHaveBeenCalledWith('boolean');
    });
});

describe('isPalindrome', () => {
    it('Should recognize a simple palindrome', () => {
        expect(isPalindrome("madam")).toEqual(true);
        expect(isPalindrome("maam")).toEqual(true);
        expect(isPalindrome("madsam")).toEqual(false);
    });

    it('Should remove special symbols of a palindrome', () => {
        expect(isPalindrome("mad,am")).toEqual(true);
    });

    it('Should remove spaces', () => {
        expect(isPalindrome("mad am")).toEqual(true);
    });

    it('Should work with uppercase and lowercase', () => {
        expect(isPalindrome("maDAm")).toEqual(true);
    });
});

describe('Person', () => {
    it('Should have two properties', () => {
        expect(Object.keys(new Person('',0))).toHaveLength(2);
    });

    it('Should have a property called name and a property called age', () => {
        expect(new Person('',0)).toHaveProperty('name');
        expect(new Person('',0)).toHaveProperty('age');
    });

    it('Should have a string property called name and a number property called age', () => {
        let student = new Person('',0);
        expect(typeof(student.name)).toEqual('string');
        expect(typeof(student.age)).toEqual('number');
    });
});

describe('printOutPersonAge', () => {
    it('Should print the age of an object of class person', () => {

        var student = new Person('Carlos',28);
        
        global.console = {
            warn: jest.fn(),
            log: jest.fn()
        }

        printOutPersonAge(student);
          
        expect(global.console.log).toHaveBeenCalledWith(student.age);
    });
});