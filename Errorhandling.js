// Error handling 
// try catch finally throw

function fn1(){
    x=x+1;
};
function fn2(){
    y=y+1;
};
try{
    fn1();
    fn2();
}catch(err){
    console.log("error occured");
}finally{
    console.log("completed");    
}

function age(n){
    if(n<=0){
        throw new Error("invalid age");
    }else{
        console.log(n,"years");
    }
};

try{
    age(-10);
}catch(err){
    console.log(err.message);
}finally{
    console.log("completed");
}

    