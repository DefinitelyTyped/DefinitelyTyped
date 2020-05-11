import Mailer from "react-native-mail";

Mailer.mail(
    { subject: "", body: "", isHTML: false },
    (error: string, event: string) => {}
);
