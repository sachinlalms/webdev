
//npm install readline-sync for terminal input
var read=require('readline-sync')
var a=read.question('Enter first number: ')
var b=read.question('Enter second number: ')
if(a>b){
    console.log(a+' is large')
}else if(a===b){
    console.log('a is eqaul to b')
}else{
    console.log(b+' is large')
}