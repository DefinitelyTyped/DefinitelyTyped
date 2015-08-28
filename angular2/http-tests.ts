/// <reference path="angular2.d.ts"/>
/// <reference path="http.d.ts"/>

import {Headers, Http, RequestOptions, Response} from 'angular2/http';

class HttpCompileTester {

	postTester() : void {
		var http : Http = new Http();
		var requestOptions : RequestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.append("X-CSRF-TOKEN", "csrf-234-567");
        
        http.post("some/url", "body of post", requestOptions)
            .toRx().subscribe((res: Response) => this.handlePostResponse(res));
	}

	handlePostResponse(res : Response) : void {
		var resultJSON = res.json();
		console.log(resultJSON);
	}
}