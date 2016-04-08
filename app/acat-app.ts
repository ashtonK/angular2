import {Component, Input} from 'angular2/core';
import {AppBody} from './app.component';
import {MainNav} from './app.component';
import {PageInfo} from './class-definition';

@Component({
	selector: 'acat-app',
	templateUrl: 'templates/acat-app.html',
	directives:[MainNav,AppBody]
})
export class AcatApp {
	public pageStatus= new PageInfo('login');

}