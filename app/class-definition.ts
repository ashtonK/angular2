export class PageInfo{
	current: string;
	constructor(public status){
		this.current=status;
	}
}
export class LoginCred{
	username: string;
	password: string;
	constructor(public userName, public passWord,public status){
		this.username=userName;
		this.password=passWord;
	}
}
export class CandidateInfo{
	firstName: string;
	lastName: string;
	loginID: string;
	problem: number;
	compStatus: string;
	evalStatus: string;

	constructor(public fName,public lName,public id, public prob, public compStat, public evalStat){
		this.firstName=fName;
		this.lastName=lName;
		this.loginID=id;
		this.problem=prob;
		this.compStatus=compStat;
		this.evalStatus=evalStat;
	}

}
export class ProblemInfo{
	problemID: number;
	problemDomain: string;
	problemContents: string;
	problemLevel: string;

	constructor(public probNum, public domain,  public level,public contents){
		this.problemID=probNum;
		this.problemDomain=domain;
		this.problemLevel=level;
		this.problemContents=contents;
	}
}