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