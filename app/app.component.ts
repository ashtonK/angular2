import {Component} from 'angular2/core';
import {CandidateAgreementPageComponent} from './candidate-pages.component';
import {CandidateLoginPageComponent} from './candidate-pages.component';
import {CandidateInstructionsPageComponent} from './candidate-pages.component';
import {PageInfo} from './page-info';


@Component({
	selector: 'main-navbar',
	templateUrl: 'templates/navbar.html'
})
export class MainNav { 
	public title ='Navbar';

}
@Component({
	selector: 'app-body',
	templateUrl: 'templates/body.html',
	directives: [CandidateAgreementPageComponent,CandidateLoginPageComponent,CandidateInstructionsPageComponent]
})
export class AppBody {
	public pageStatus = {
		current: "login"};
		adminPage = 'candidates';
		candidateName = 'Ashton';

		adminPageSwitch(page){
			console.log(page+" is the new admin page");
			this.adminPage=page;
		}
		adminLogin(){
			console.log("Admin Mode");
			this.pageStatus.current='admin';
		}
		resetPageDebug(){
			console.log("Resetting to Login page");
			this.pageStatus.current="login";
		}
		logCurrentPage(){
			console.log('currentPage '+ this.pageStatus.current);
		}

	}
