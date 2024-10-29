// functions
function sum(){
    var a=10;
    var b=20;
    var c=a+b;
    return c;
};
var res=sum();
console.log(res);

function sub(a,b){
    var c = a-b;
    return c;
}
console.log(sub(20,5));

// function expression

var exp1=function(){
    var A=10;
    var B=5;
    var add=A+B;
    console.log(add);
    return add;
};
console.log(exp1());

var exp2=function(x,y){
    var z=x-y;
    return z;
}
console.log(exp2(20,16));




