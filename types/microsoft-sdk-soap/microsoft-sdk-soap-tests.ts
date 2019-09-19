
import * as Q from "q";

// QueryByAttribute
var queryByAttribute = new Sdk.Query.QueryByAttribute( "account" );
queryByAttribute.addColumn( "accountnumber" );
queryByAttribute.addAttributeValue( new Sdk.String( "name", "acme" ) );
Sdk.Q.retrieveMultiple( queryByAttribute ).then( entityCollection =>
{
	var accountNumber = entityCollection.getEntity( 0 ).getAttributes( "accountnumber" ).getValue();
	console.log( "Account 'acme' has the Account Number '" + accountNumber + "'" );
} );

// QueryExpression
var queryExpression = new Sdk.Query.QueryExpression( "account" );
queryExpression.setColumnSet( new Sdk.ColumnSet( true ) );
queryExpression.addCondition( "account", "accountname", Sdk.Query.ConditionOperator.BeginsWith, new Sdk.Query.Strings( [ "abc", "xyz" ] ) );
Sdk.Q.retrieveMultiple( queryExpression ).then( entityCollection =>
{
	console.log( "Query matches " + entityCollection.getTotalRecordCount() + " records." );
} );