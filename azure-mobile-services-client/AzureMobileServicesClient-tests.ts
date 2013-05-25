/// <reference path="AzureMobileServicesClient.d.ts" />


//create base client istance and read properties
var client = new WindowsAzure.MobileServiceClient("your-azure-mobile-application-URL", "your-azure-application-KEY");
console.log("Azure application URL: " + client.applicationUrl);
console.log("Azure application KEY: " + client.applicationKey.replace(/./gi,'*')); //KEEP IT SECRET!!!


//user authentication, to make it work follow this guide: http://www.windowsazure.com/en-us/develop/mobile/tutorials/get-started-with-users-html/?fb=it-it#add-authentication 
if (client.currentUser === null) {
    client.login("facebook")
    .then((u: Microsoft.WindowsAzure.User) => alert(u.level))
    .done(() => alert("USER: " + client.currentUser.userId),
            (e) => alert("ERROR: " + e));
} else { client.logout(); }


//define an interface that map to server side Table data
interface TodoItem { id?: number; text?: string; complete?: bool; }
var data: TodoItem[];
var tableTodoItems = client.getTable('todoitem');


//read all data from server using Promise .then() and error handling in .done()
tableTodoItems.read()
.then((retList: TodoItem[]) => {
    data = retList; return retList.length
})
.done((n: number) =>
    alert(n + " items downloaded"), (e) => alert("ERROR: " + e));


//define simple handler used in callback calls for insert/update and delete 
function handlerInsUpd(e, i) => { if (!e) data.push(<TodoItem> i); };
function handlerDelErr(e) => { if (e) alert("ERROR: " + e); }


//insert one data passing info in POST + custom data in QueryString + simple callback handler
tableTodoItems.insert({ text: 'hello world!', complete: false }, {timestamp: new Date()} , handlerInsUpd);


//update last item changing complete and calling simple handler when done 
var todo = data.pop();
todo.complete = !todo.complete;
tableTodoItems.update(todo, null, handlerInsUpd)


//delete first item
tableTodoItems.del({ id: data[0].id },null).done(null, handlerDelErr)


//testing some simple Query fluent
var query = tableTodoItems.select('text', 'id')
            .where({ complete: false })
            .orderBy('text') 
query.read().done(printOut);  //Execute query remotly and return data filtered
    

//testing more complicated Query in composition with previous using function Predicate and Projection
var minlength = 15; //parameter value for filter Predicate
query.where(function (len: number) { return this.text != null && this.text.length > len }, minlength) 
    .orderByDescending('id').skip(2).take(3) //some other ordering and paging filters
    .select(function () { return { abc: this.text + '|' + this.id }; }) //Projection
    .read().done(printOut); //return 3 object {abd: 'ttttttttttttttt|ID'}
  
    
//function that printout the query result in JSON
function printOut(ret:any[]) {
    if (!ret) console.log("NO DATA FOUND!")
    else for (var i = 0; i < ret.length; i++) {
        console.log(JSON.stringify(ret[i])); } 
}
