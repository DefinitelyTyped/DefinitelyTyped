var mk = new MilkCocoa("hostAddress");
mk.addAccount("sample@test.com", "password", null, (err: MilkCocoa.Error.AddAccount, user: milkcocoa.User) => {
  
  switch (err) {
    case null:
      console.log("Done.");
      break;
    case MilkCocoa.Error.AddAccount.FormatError:
      console.log("Invalid mail address.");
      break;
    case MilkCocoa.Error.AddAccount.AlreadyExist:
      console.log("Already added account.");
      break;
  }
});
mk.login("sample@test.com", "password", (err: MilkCocoa.Error.Login, user: User) => {
  if (err === MilkCocoa.Error.Login.FormatError) {
    console.log("Invalid mail address.");
  } else if (err === MilkCocoa.Error.Login.LoginError) {
    console.log("Or Email that is not registered, it is not a valid password.");
  } else if (err === MilkCocoa.Error.Login.EmailNotVerificated) {
    console.log("Still account is temporary registration.");
  } else {
    //成功時はユーザIDを取得できます。
    var user_id = user.id;
  }
});
mk.dataStore("datastore").push({ message: "this is message." }, (data: DataStoreCallbackData) => {
  console.log("pushed.");
});
mk.dataStore("datastore").child("chat").child("message").on("push", (data: DataStoreCallbackData) => {
  console.log(data.value.message);
});
mk.dataStore("datastore").child("chat").child("message").query().limit(10).done((data) => {
  console.log(data.message);
});
