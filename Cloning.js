// Shallow cloning only one level
var obj1={
    name:"john",
    age:15,
    height:170,
    wight:50,
}
// var obj2=obj1; getting refrernce
// cloning three ways 
// spread operator (ES6)
// object.assign meethod
// iteration

// spread operator 
var obj2={...obj1};
obj2.name="jack";
console.log(obj1);
console.log(obj2);


// object.assign method
var obj22=Object.assign({},obj1);
console.log(obj22===obj1);

// iteration
var des={};
for(var key in obj1){
    var newkey=key;
    var newvalue=obj1[key];
    des[key]=newvalue;
};
console.log(des);
console.log(des===obj1);

// Deep cloning

var emp={
    name:"oggy",
    age:40,
    height:190,
    weight:60,
    info:{
        salary:2000,
        active:true,
        role:"hr manager",
        address:{
            addr:9-2-10,
            street:"langer house"
        }
    }
}
function deep(obj){
    var emp2={};
    for(var key in obj){
        var newvalue=obj[key];
        if(typeof newvalue==="object"){
        emp2[key]=deep(newvalue);
    }else {
        emp2[key]=newvalue;
    }
}
return emp2;
}
var res=deep(emp);
console.log(res.info===emp.info);
res.name="jack"
console.log(res);
console.log(emp);






