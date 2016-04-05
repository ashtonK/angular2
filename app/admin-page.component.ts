import {Component, Input} from 'angular2/core';

import {PageInfo} from './page-info';

@Component({
	selector: 'admin-page',
	templateUrl: 'templates/admin-page.html'
})
export class AdminPage {
	@Input()
	adminPage: PageInfo;
	adminPageSwitch(adminpage){
		this.adminPage.current=adminpage;
	}

}
