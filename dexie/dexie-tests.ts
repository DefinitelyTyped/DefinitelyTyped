import Dexie from "./dexie";

interface IFriend {
    id?: number,
    name?: string,
    age?: number
}

class MyDB extends Dexie {
    friends: Dexie.Table<IFriend, number>;
    constructor() {
        super("MyDB");
        this.version(1).stores({
            friends: "++id,name,age"
        });
    }
}

var db = new MyDB();

db.friends.add({name: "Kalle", age: 23}).then(()=>{
   db.friends.where('age').below(30).count(count => {
      console.log("Num yound friends: " + count); 
   });
});
