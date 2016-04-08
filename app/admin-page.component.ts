import {Component, Input} from 'angular2/core';

import {PageInfo} from './class-definition';
import {CandidateInfo} from './class-definition';
import {ProblemInfo} from './class-definition';

@Component({
	selector: 'admin-candidates-page',
	templateUrl: 'templates/admin-candidates-page.html'
})
export class AdminCandidatesPage {
	@Input()
	public candidates=CANDIDATES;
	adminPage: PageInfo;
	edittedCandidate: CandidateInfo;
	onEdit(candidate:CandidateInfo){
		this.edittedCandidate=candidate;
		console.log(this.edittedCandidate.loginID+" is selected for editting");
	}	
}
@Component({
	selector: 'admin-submissions-page',
	templateUrl: 'templates/admin-submissions-page.html'
})
export class AdminSubPage{
	@Input()
	adminpage: PageInfo;
	public submissions= getSubmissions(CANDIDATES);

}
function getSubmissions(candidates:CandidateInfo[]){
	var submissions=[];
	for(var  submission of candidates){
		if( submission.compStatus==="Complete" ){
			submissions.push(submission);
		}
	}  
	return submissions;
}

@Component({
	selector: 'admin-problems-page',
	templateUrl: 'templates/admin-problems-page.html'
})
export class AdminProbPage{
	@Input()
	adminpage: PageInfo;
	public problems=PROBLEMS;
	candidateList: string[];
	displayList(problemID){
		this.candidateList=getCandidate4Prob(problemID);
	}



}
function getCandidate4Prob(problem: number){
	var candidates=[];
	for(var candidate of CANDIDATES){
		if(candidate.problem===problem){
			candidates.push({name:candidate.firstName+" "+candidate.lastName, loginID: candidate.loginID})
		}
	}
	return candidates;
}


@Component({
	selector: 'admin-page',
	templateUrl: 'templates/admin-page.html',
	directives:[AdminCandidatesPage,AdminSubPage]
})
export class AdminPage {
	@Input()
	adminPage: PageInfo;
	adminPageSwitch(adminpage){
		this.adminPage.current=adminpage;
	}

}



//temporary local candidate info,
//will be replaced with a service that maintains in data base.
var CANDIDATES : CandidateInfo[] =[
new CandidateInfo("Ashton","Kim","akim6",2,"Complete","In Testing"),
new CandidateInfo("Anthony","Cato","acato",1,"In Progress","Pending"),
new CandidateInfo("Tom","Meagher","tmeagher",3,"Not Initiated","Pending")
new CandidateInfo("Rob","Russo","rrusso",1,"Complete","Pending")
]
var PROBLEMS  : ProblemInfo[]=[
new ProblemInfo(1,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(2,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(3,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(4,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(5,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(6,"Java","Low","Construct a code Hierarchy")
]
