// Objects
// 1. objects literals
var mobile={
    brand:"apple",
    model:"iphone 11",
    color:"black",
    print:function(){
        console.log("i have a phone");
    }
}
mobile.print();
console.log(mobile);
mobile.width="10";
mobile["height"]="20";
console.log(mobile);
delete mobile.brand;
console.log(mobile);

// 2.template or construction function 

function product1(){
    this.price=200;
    this.color="red";
    this.review=3.5;
    this.print=function(){
        console.log("stand");
    }
}
function product2(){
    this.price=2000;
    this.color="black";
    this.review=4.5;
    this.print=function(){
        console.log("camera");
    }
}
function product3(){
    this.price=200;
    this.color="white";
    this.review=3.5;
    this.print=function(){
        console.log("watch");
    }
}
var p1=new product1();
var p2=new product2();
var p3=new product3();
p1.print();
console.log(p1);
p2.print();
console.log(p2);
p3.print();
console.log(p3);

// create method
var mess={
    print:function(){
        console.log("i have a clothes");
    }
}
var clothes=Object.create(mess,{
    cloth:{ value:"cotton",enumerable:true },
    price: {value:500,writable:true,enumerable:true,configurable:true},
    color: {value:"white",writable:true,enumerable:true}
})
clothes.color="red";
Object.defineProperty(clothes,"price",{
    enumerable:false
});
clothes.print();
for(var key in clothes)
    console.log(key+ ":" +clothes[key]);

// Class keyword

class books{
    language = "hindi";
    review=4.5;
    discount="10%";
    rate=500;
}
var b=new books();
console.log(b);

// using constructor
class books1{
    constructor(){
        this.language="english";
        this.review=4.0;
        this.rate=600;
        this.discount="5%";
    }
}
var b1=new books1()
console.log(b1);

class books2 extends books1{
    constructor(color){
        super();
        this.color=color;
        console.log("i have an english book");
    }
}
var b2=new books2("red")
console.log(b2);
