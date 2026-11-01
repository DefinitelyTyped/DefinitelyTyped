import netrc from "netrc";

const machines = netrc(".mynetrc");

const { login, password } = machines["example.com"];
// $ExpectType string
login;
// $ExpectType string
password;

// $ExpectType string
netrc.format(machines);

machines["github.com"] = {
    login: "AzureDiamond",
    password: "hunter2",
};
// $ExpectType void
netrc.save(machines);

// netrc-valid-w-comment from camshaft/netrc
const content = `# I am a comment
machine github.com
  password 123
  login CamShaft
# I am another comment`;
// $ExpectType Machines
netrc.parse(content);
