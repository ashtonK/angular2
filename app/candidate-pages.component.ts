import{Component, Input} from 'angular2/core';
import {PageInfo} from './page-info';
@Component({
	selector: 'candidate-login-page',
	templateUrl: 'templates/candidate-login-page.html'
})
export class CandidateLoginPageComponent{
	@Input()
	page : PageInfo;

	nextPage(){
		this.page.current='agreement';
		console.log("page ="+ this.page.current);
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