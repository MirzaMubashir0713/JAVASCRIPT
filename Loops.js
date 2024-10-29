// LOOPs
// for loop
var n=10
for(var i=0;i<=n;i++){
    console.log(i);
    
}
for(var i=1;i<=n;i++){
    for(var j=1;j<=n;j++){
        console.log(i+ " * " +j+ "=" +i*j);
    }
}

for(var i=1;i<=5;i++){
    console.log("*".repeat(i));
    
}

// While loop
console.log("WHILE LOOP");

var i=1;
while(i<=5){
    console.log(i);
    i++;
}
var i=1;
while(i<=10)
    {
        var j=1;
        while(j<=10)
            {
                console.log(i+"*"+j+"="+i*j);
                j++;
            }   
            i++;
    }

// do while loop
console.log("DO WHILE LOOP");

var k=1;
do{
    l=1;
    do{
        console.log(k+"*"+l+"="+k*l);
        l++;
    }while(l<=10)
    k++;
}while(k<=10)