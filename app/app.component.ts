import {Component, Input} from 'angular2/core';
import {CandidateAgreementPageComponent} from './candidate-pages.component';
import {CandidateLoginPageComponent} from './candidate-pages.component';
import {CandidateInstructionsPageComponent} from './candidate-pages.component';
import {AdminPage} from './admin-page.component';
import {PageInfo} from './class-definition';

@Component({
	selector: 'main-navbar',
	templateUrl: 'templates/navbar.html'
})
export class MainNav {
	@Input()
	pageStatus:PageInfo;
	resetPage(){
		this.pageStatus.current="login";
		console.log("Clicked, change to "+this.pageStatus.current);
	}

}
@Component({
	selector: 'app-body',
	templateUrl: 'templates/body.html',
	directives: [CandidateAgreementPageComponent,CandidateLoginPageComponent,CandidateInstructionsPageComponent,AdminPage]
})
export class AppBody {
	@Input()
	pageStatus:PageInfo;
	adminPage = new PageInfo("candidates");
	candidateName = 'Ashton';

	logCurrentPage(){
		console.log('currentPage '+ this.pageStatus.current);
	}
	

}
