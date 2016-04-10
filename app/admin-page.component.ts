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
	addedCandidate: CandidateInfo;
	problemList=PROBLEMS;
	onEdit(candidate:CandidateInfo){
		this.addedCandidate=null;
		this.edittedCandidate=candidate;
		console.log(this.edittedCandidate.loginID+" is selected for editting");
	}
	doneEdit(){
		this.edittedCandidate=null;
	}
	openAddCandidate(){
		this.edittedCandidate=null;
		this.addedCandidate= new CandidateInfo("","","",0,"","");
	}
	addCandidate(){
		this.candidates.push(this.addedCandidate);
	}
	cancelAddCandidate(){
		this.addedCandidate=null;
	}
	deleteCandidate(loginId){
		removeByAttr(this.candidates,"loginID",loginId);
		this.edittedCandidate=null;
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
	edittedProblem: ProblemInfo;
	addedProblem: ProblemInfo;
	candidateList: string[];
	displayList(problemID){
		this.candidateList=null;
		this.candidateList=getCandidate4Prob(problemID);
	}
	hideList(){
		this.candidateList=null;
	}
	displayProblem(problem:ProblemInfo){
		this.candidateList=null;
		this.addedProblem=null;
		this.edittedProblem=problem;
	}
	doneDisplayProblem(){
		this.edittedProblem=null;
	}
	openAddProblem(){
		this.candidateList=null;
		this.edittedProblem=null;
		this.addedProblem= new ProblemInfo(this.generateID(),"","","")
	}
	addProblem(){
		this.problems.push(this.addedProblem);
	}
	cancelAddProblem(){
		this.addedProblem=null;
	}
	generateID(){
		return this.problems.length+1;
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
	directives:[AdminCandidatesPage,AdminSubPage,AdminProbPage]
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
new ProblemInfo(2,"Python","Low","Construct a code Hierarchy"),
new ProblemInfo(3,"Java","Low","Construct a code Hierarchy"),
new ProblemInfo(4,"C++","High","Construct a code Hierarchy"),
new ProblemInfo(5,"JavaScript","Low","Construct a code Hierarchy"),
new ProblemInfo(6,"Java","Low","Construct a code Hierarchy")
]


var removeByAttr = function(arr, attr, value){
	var i = arr.length;
	while(i--){
		if( arr[i] 
			&& arr[i].hasOwnProperty(attr) 
			&& (arguments.length > 2 && arr[i][attr] === value ) ){ 

			arr.splice(i,1);

	}
}
return arr;
}
