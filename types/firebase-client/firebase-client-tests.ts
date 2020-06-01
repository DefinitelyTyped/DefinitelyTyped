

//Class definitions for type safety
class Name{
    first:string;
    last:string;
}

class User{
    name:Name;
}

//Connect to service
var client = new FirebaseClient({
    url : "https://fb-client-test.firebaseio.com/",
    auth : null
});

var newUser:User = new User();
newUser.name = {
    first: "Fred",
    last: "Flinstone"
};

client.push("users", newUser)
    .then(function (result){
        console.log(result.name);
        var newUser2:User = new User();
        newUser2.name = {
            first: "Fred",
            last: "Rockington"
        }
        return client.update("users/" + result.name, newUser2);
    }).then(function (result){
        console.log(result.name.last);
        var newUser3:User = new User();
        newUser3.name = {
            first: "Axe",
            last: "Steel"
        };
        return client.set("users/AXESTEEL", newUser3);
    }).then(function (result){
        console.log(result.name.first);
        return client.get();
    }).then(function (result){
        console.log(result);
        return client.get<User>("users/AXESTEEL")
    }).then(function (result){
        console.log(result.name.first);
    });
