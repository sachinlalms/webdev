var num=10;
function hello(){
    num=20
    function hi(){
       num=56;
    }
    hi()
}
hello()
console.log(num)