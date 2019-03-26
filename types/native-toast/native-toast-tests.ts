import toast = require("native-toast");

let t: toast.Toast;

t = toast({
  message: "Team created",
  position: "north-east",
  timeout: 5000,
  type: "success",
});

t.hide();
t.show();

const o: toast.ToastOptions = {
  message: "test",
  position: "west"
};

toast.success(o);
