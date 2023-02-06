// function greet(name){
//     console.log(name+" is a good player");
// }

function greet(name1,nam2){
    // var name1="raj";
    console.log(name1+" his surnam his "+nam2);
    
}

function defaultFunction(a,b=5){
    console.log(a+b);
    
}

function sum(a,b,c){
    return a+b+c;
}

// greet("vishal"); //it will give "vishal his surname his undefined"
let name = "vishal";
let name2 = "soni";
greet(name,name2); //why it is giving cross here

//default parameter function
defaultFunction(5,8);
defaultFunction(5);

//return function
let get = sum(1,2,3);
console.log(get);


