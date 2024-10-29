// if , else if ladder , else , nested if ,Switch
var a=10;
var b=4;
var c=20;
if(a<b){
    console.log(a);
}else{
    console.log(b);
}

if(a==b){
    return a+b;
}else{
    console.log("not equal");
}

if(a>b){
    if(b>c){
        return c;
    }else{
        console.log("b is smallest");
    }
}else{
    console.log("a is smallest");
}

// Switch case
// calculator 
var num1=20
var num2=30
var operations="*"
switch(operations){
    case '+' : console.log("Addition = " +(num1+num2));
    break;
    
    case '-' : console.log("subtraction = " +(num1-num2));
    break;
    
    case '*' : console.log("Multiplication = " +(num1*num2));
    break;
    
    case '/' : console.log("Divide = " + (num1/num2));
    break;
    default : console.log("enter the correct operations");
    break;
}