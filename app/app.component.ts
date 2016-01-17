import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {NavComponent} from './nav.component'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['.././Narrow Jumbotron Template for Bootstrap_files/bootstrap.min.css','.././Narrow Jumbotron Template for Bootstrap_files/ie10-viewport-bug-workaround.css','.././Narrow Jumbotron Template for Bootstrap_files/jumbotron-narrow.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/navbar', name: 'NavComponent', component: NavComponent, useAsDefault: true},
])
export class AppComponent {
  public title = 'Charley Morgan';
}
