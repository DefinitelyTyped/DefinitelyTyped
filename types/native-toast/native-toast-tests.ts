import toast, { Toast, ToastOptions } from "native-toast";

let t: Toast;

t = toast({
  message: "Team created",
  position: "north-east",
  timeout: 5000,
  type: "success",
});

t.hide();
t.show();

const o: ToastOptions = {
  message: "test",
  position: "west"
};

toast.success(o);
