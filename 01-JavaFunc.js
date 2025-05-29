//Function Declaration
function userprofile(name){
    console.log("Hello");
    
}
userprofile()

//Arrow function
let double=(num) => num*2;
console.log("Double of 5 is:",double(5));

//anonymous function
setTimeout(function(){
    console.log("This message is delayed by 2 seconds.");
    
},2000)

//Callback function

function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "John",
            age: 30
        };
        callback(user);
    }, 3000);
}

getUserData(function(user) {
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
});
