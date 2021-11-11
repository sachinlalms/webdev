// No Arguments no return value
function hello(){
    console.log('Hello World')
}

//Arguments not return values
function sum(num1, num2){
    console.log(num1+num2)
}
//Arguments with return value
function sum2(num1,num2 ){
    return num1+num2;
}
console.log(sum2(8,2))
//No arguments bt return value
function sum3(){
    num1=9;
    num2=99;
    return num1+num2;
}
hello()
sum(5,9)
var result=sum3()
console.log(result)
