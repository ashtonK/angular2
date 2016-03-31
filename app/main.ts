
/*
This main.ts file could easily be in app.components and is tiny
this is here for proper structure.

*/
import {bootstrap} from 'angular2/platform/browser';
/*
Import Angular's brower bootstrap function
imported from browser, not core. no single way to bootstrap app.
*/

/*
Import Application root component
*/
import {LoginScreen} from './app.component';
import {MainNav} from './app.component';

bootstrap(LoginScreen);
bootstrap(MainNav);
/*
Call Bootstrap with AppComponent.
*/