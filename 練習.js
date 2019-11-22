var first = prompt("enter first number");
var second = prompt('enter second number');
var sum = Number(first) + Number(second);
alert('The sum is ' + sum);

var name= "Billy";
if(name === "Billy") {
    alert('hi billy!');
}

if(name==="billy" || name==="Ann"){
    alert('Hi billy or ann');
}

function sayHello () {
    console.log('hello');
}

function multiply(a,b) {
    if(a>3 && b>10) {
        return 'thats too good';
    }else {
        return a*b;
    }
}

var user = {
    name:"john",
    password:"111",
    hobby:"programming",
    isMarried: false,
    shout: function(){
        console.log("AHHH");
    }
};

user.name
user.shout()

var database = [
    {
       username: "chiyomi",
       password: "333"
    },
    {
        username: "wubu",
        password:"555"
    },
    {
        username: "chako",
        password: "888"
    }
];

var newsFeed = [
    {
        username: "Bill",
        timeline: "JS is so much fun"
    },
    {
        username: "sally",
        timeline: "programming is so much fun"
    }
];

var userNamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("whats is your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass=== database[0].password){
        console.log(newsFeed);
    }else {
        alert('sorry, wrong username and password');
    }
}
signIn(userNamePrompt, passwordPrompt);

