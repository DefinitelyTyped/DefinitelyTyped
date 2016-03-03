/// <reference path="sdk.soap.d.ts"/>

var query = new Sdk.Query.QueryByAttribute( "account" );
query.addColumn( "accountnumber" );
query.addAttributeValue( new Sdk.String( "name", "acme" ) );
Sdk.Q.retrieveMultiple( query ).then( entityCollection =>
{
	var first = entityCollection.getEntities().getByIndex( 0 );
	var accountNumber = first.getAttributes().getAttributeByName( "accountnumber" );
	console.log( "Account 'acme' has the Account Number '" + accountNumber + "'" );
} );