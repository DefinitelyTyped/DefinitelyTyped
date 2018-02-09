// https://msdn.microsoft.com/en-us/library/aa752044(v=vs.85).aspx
(() => {
    const ie = new ActiveXObject('InternetExplorer.Application');
    ie.Navigate('http://contoso.com');
    ie.Visible = true;
})();

let obj1 = new ActiveXObject('ShellNameSpace.ShellNameSpace');

let obj2 = new ActiveXObject('Shell.UIHelper');

let obj3 = new ActiveXObject('Shell.Explorer');
