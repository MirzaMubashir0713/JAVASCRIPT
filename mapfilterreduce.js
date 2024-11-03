// map
var arr=[1,2,3,4,5,6,7,8];
var res=arr.map(function(ele)
{
    return ele*2;    
})
console.log(res);

function triple(ele){
    return ele*3;
};
var res2=arr.map(triple);
console.log(res2);

var emp=[
    {name:"emp1",salary:200,active:true},
    {name:"emp2",salary:500,active:true},
    {name:"emp3",salary:300,active:false},
];
var inc=emp.map(function(ele){
    return ele.salary+=ele.salary*0.1;
});
console.log(inc);

// filter 

var ress=arr.filter(function(ele){
    return ele%2===0;
})
console.log(ress);

function isOdd(ele){
    return ele%2!==0;
}
var ress2=arr.filter(isOdd);
console.log(ress2);

var incc=emp.filter(function(ele){
    if(ele.active===true) return ele.salary+=ele.salary*0.2;
    else return ele.active===false;
});
var high=emp.filter(function(ele){
    return ele.salary>=300;
})
var inactive=emp.filter(function(ele){
    return ele.active!==true;
})
console.log(incc);
console.log(high);
console.log(inactive);

// Reduce 

var red=arr.reduce(function(acc,ele){
    return acc+ele;
})
console.log(red);

var red2=emp.reduce(function(acc,ele){
    return ele.salary=acc+ele.salary;
},0);
console.log(red2);






