/// <reference path="forcetk.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

// Example codes from README.md at https://github.com/developerforce/Force.com-JavaScript-REST-Toolkit

// Get a reference to jQuery that we can work with
declare var $j: JQueryStatic;

function Using_ForceTK_in_a_Visualforce_page() {
    // Get an instance of the REST API client and set the session ID
    var client = new forcetk.Client();
    client.setSessionToken('{!$Api.Session_ID}');
    
    client.query("SELECT Name FROM Account LIMIT 1", function(response){
        $j('#accountname').html(response.records[0].Name);
    });
}
