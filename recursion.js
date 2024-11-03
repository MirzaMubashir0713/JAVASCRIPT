// Recursion
function fact(n){
    if(n===1) return 1;
    else return n*fact(n-1);
}
console.log(fact(4));


function series(n){
    for(var i=0;i<n;i++)
        {
            var res=fib(i);
            console.log(res);
        }
    
}
function fib(n){
    if(n<=1) return n;
    else return fib(n-1)+fib(n-2);
};
series(10);

// priting 1 to n
function num(n){
    if(n===0) return;
    num(n-1);
    console.log(n);
};
num(5);

// linear search
var i=0;
function linearsearch(arr,k){
    if(i===arr.length) return false;
    if(arr[i]===k) return true;
    i++;
    return linearsearch(arr,k);
};
var ress=linearsearch([1,2,3,4,5,6],9);
console.log(ress);



