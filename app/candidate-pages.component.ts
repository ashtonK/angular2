import{Component, Input} from 'angular2/core';
import {PageInfo} from './class-definition';
import {LoginCred} from './class-definition';
@Component({
	selector: 'candidate-login-page',
	templateUrl: 'templates/candidate-login-page.html'
})
export class CandidateLoginPageComponent{
	@Input()
	page : PageInfo;
	login= new LoginCred("username", "password");

	checkLogin(){
		//mock login
		if(this.login.username==="akim" && this.login.password==="1234"){

			this.page.current="agreement";
			console.log("Going to Agreement");	
		}else{
			console.log("Wrong Login Credentials");
			this.page.current="agreement";
		}
	}
	adminLogin(){
		console.log("Admin Mode");
		this.page.current='admin';
	}

}
@Component({
	selector: 'candidate-agreement-page',
	templateUrl: 'templates/candidate-agreement-page.html'
})
export class CandidateAgreementPageComponent{
	@Input()
	page : PageInfo;

	nextPage(){
		this.page.current='instruction';
		console.log("page ="+ this.page.current);
	}
}

@Component({
	selector: 'candidate-instructions-page',
	templateUrl: 'templates/candidate-instructions-page.html'
})
export class CandidateInstructionsPageComponent{
	@Input()
	page : PageInfo;

	nextPage(){
		this.page.current='';
		console.log("page ="+ this.page.current);
	}
}