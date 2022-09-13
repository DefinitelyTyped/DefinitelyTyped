import * as React from "react";
import MailchimpSubscribe, {
  NameFormFields
} from "react-mailchimp-subscribe";

const Example: React.FunctionComponent = () => (
  <>
    <MailchimpSubscribe
      render={(hooks) => (<>
        { hooks.status === "error" &&
          <span>hooks.message</span>
        }
        { hooks.status === "sending" &&
          <span>Sending!</span>
        }
        { hooks.status === "success" &&
          <span>It's been sent! {hooks.message}</span>
        }
        <form
          onSubmit={e => {
            e.preventDefault();
            hooks.subscribe({ EMAIL: "8675309@aol.com" });
          }}
        />
      </>)}
      url="spam.biz/subscribe"
    />
    <MailchimpSubscribe<any>
      render={(hooks) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            hooks.subscribe({ myArbitraryData: "is here!" });
          }}
        />
      )}
      url="spam.biz/subscribe"
    />
    <MailchimpSubscribe<NameFormFields>
      render={(hooks) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            hooks.subscribe({
              FNAME: "大",
              LNAME: "哥",
              EMAIL: "da.ge@qq.com",
            });
          }}
        />
      )}
      url="spam.biz/subscribe"
    />
  </>
);
