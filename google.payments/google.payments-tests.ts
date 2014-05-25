/// <reference path="google.payments.d.ts" />

google.payments.inapp.buy(
	{
		"jwt" : "not actually a JWT"
	}
);

google.payments.inapp.buy(
	{
		"jwt" : "not actually a JWT",
		"success" : function(response){
			console.log(response.response.orderId);
		}
	}
);

google.payments.inapp.buy(
	{
		"jwt" : "not actually a JWT",
		"success" : function(response){
			console.log(response.response.orderId);
		},
		"failure" : function(response){
			console.log(response.response.errorType);
		}
	}
);