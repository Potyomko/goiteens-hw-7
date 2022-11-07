const hello1 = function(param1) {
    return param1;
}
console.log(hello1('Привіт JavaScript'));


const hello2 = function(name) {
    return `Привіт, ${name}`;
}
hello2("Василь");
console.log(hello2('Василь'));


const mun = function (m,n) {
    console.log(m+n);
    console.log(m-n);
    console.log(m*n);
}
mun(10,2);


const myNewArrowFunction = function (...args) {
    console.log(args);
}
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");


const myAverageScore = function (array) {
    console.log(array);
    const result = 0;
    for (const number of array) {
        result = (result + number) / array.length;
    }
    if (result > 91 && result < 100) {
        console.log("A");
    }
    if (result > 81 && result < 90) {
        console.log("B");
    }
    if (result > 71 && result < 80) {
        console.log("C");
    }
    if (result > 0 && result < 70) {
        console.log("D");
    }
}
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));