/*
Reference the elements that we need.
Angular apps are modular, many files each dedicate to purpose.
Component Decorator function from main Angular library module
*/
import {Component} from 'angular2/core';

/*

Tells Angular what template to use and how to create component.
Component decorator function takes a metadataobject.
*/


@Component({
	selector: 'main-navbar',
	templateUrl: 'templates/navbar.html'
})
export class MainNav { 
	public title ='Navbar';

} 
@Component({
	selector: 'app-body',
	templateUrl: 'templates/body.html'
})
export class LoginScreen {
	status = 'login';
	adminPage = 'candidates';

	adminPageSwitch(page){
		console.log(page+" is the new admin page");
		this.adminPage=page;
	}
	adminLogin(){
		console.log("Admin Mode");
		this.status='admin';
	}

	nextpage(){
		if(this.status==='login'){
			this.status='agreement';
		} else if(this.status ==='agreement'){
			this.status='instruction';
		}
	}
	resetPageDebug(){
		console.log("Resetting to Login page");
		this.status="login";
	}

}
