///<reference path="./milk-cocoa.d.ts"/>
var mk = new MilkCocoa("hostAddress");
mk.addAccount("sample@test.com", "password", null, (err: MilkCocoa.Error.AddAccount, user: User) => {
  switch (err) {
    case null:
      console.log('正常に登録が完了しました');
      break;
    case MilkCocoa.Error.AddAccount.FormatError:
      console.log('無効な書式のメールアドレスです');
      break;
    case MilkCocoa.Error.AddAccount.AlreadyExist:
      console.log('既に追加されているメールアドレスです');
      break;
  }
});
mk.login("sample@test.com", "password", (err: MilkCocoa.Error.Login, user: User) => {
  if (err === MilkCocoa.Error.Login.FormatError) {
    console.log('Emailの形式が無効です。');
  } else if (err === MilkCocoa.Error.Login.LoginError) {
    console.log('登録されていないEmailか、無効なパスワードです。');
  } else if (err === MilkCocoa.Error.Login.EmailNotVerificated) {
    console.log('まだアカウントは仮登録です');
  } else {
    //成功時はユーザIDを取得できます。
    var user_id = user.id;
  }
});
mk.dataStore("datastore")