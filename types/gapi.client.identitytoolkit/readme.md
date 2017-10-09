# TypeScript typings for Google Identity Toolkit API v3
Help the third party sites to implement federated login.
For detailed description please check [documentation](https://developers.google.com/identity-toolkit/v3/).

## Installing

Install typings for Google Identity Toolkit API:
```
npm install @types/gapi.client.identitytoolkit@v3 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('identitytoolkit', 'v3', () => {
    // now we can use gapi.client.identitytoolkit
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and administer all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Google Identity Toolkit API resources:

```typescript 
    
/* 
Creates the URI used by the IdP to authenticate the user.  
*/
await gapi.client.relyingparty.createAuthUri({  }); 
    
/* 
Delete user account.  
*/
await gapi.client.relyingparty.deleteAccount({  }); 
    
/* 
Batch download user accounts.  
*/
await gapi.client.relyingparty.downloadAccount({  }); 
    
/* 
Reset password for a user.  
*/
await gapi.client.relyingparty.emailLinkSignin({  }); 
    
/* 
Returns the account info.  
*/
await gapi.client.relyingparty.getAccountInfo({  }); 
    
/* 
Get a code for user action confirmation.  
*/
await gapi.client.relyingparty.getOobConfirmationCode({  }); 
    
/* 
Get project configuration.  
*/
await gapi.client.relyingparty.getProjectConfig({  }); 
    
/* 
Get token signing public key.  
*/
await gapi.client.relyingparty.getPublicKeys({  }); 
    
/* 
Get recaptcha secure param.  
*/
await gapi.client.relyingparty.getRecaptchaParam({  }); 
    
/* 
Reset password for a user.  
*/
await gapi.client.relyingparty.resetPassword({  }); 
    
/* 
Send SMS verification code.  
*/
await gapi.client.relyingparty.sendVerificationCode({  }); 
    
/* 
Set account info for a user.  
*/
await gapi.client.relyingparty.setAccountInfo({  }); 
    
/* 
Set project configuration.  
*/
await gapi.client.relyingparty.setProjectConfig({  }); 
    
/* 
Sign out user.  
*/
await gapi.client.relyingparty.signOutUser({  }); 
    
/* 
Signup new user.  
*/
await gapi.client.relyingparty.signupNewUser({  }); 
    
/* 
Batch upload existing user accounts.  
*/
await gapi.client.relyingparty.uploadAccount({  }); 
    
/* 
Verifies the assertion returned by the IdP.  
*/
await gapi.client.relyingparty.verifyAssertion({  }); 
    
/* 
Verifies the developer asserted ID token.  
*/
await gapi.client.relyingparty.verifyCustomToken({  }); 
    
/* 
Verifies the user entered password.  
*/
await gapi.client.relyingparty.verifyPassword({  }); 
    
/* 
Verifies ownership of a phone number and creates/updates the user account accordingly.  
*/
await gapi.client.relyingparty.verifyPhoneNumber({  });
```