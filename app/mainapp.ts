import {Component} from 'angular2/core';
import {MainNav} from './app.component';
import {AppBody} from './app.component';
@Component({
	selector:'acat-app',
	templateUrl:'templates/acat-app.html',
	directives:[MainNav,AppBody]
})
export class MainApp { 
}