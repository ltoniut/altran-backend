import { Component } from 'angular2-cli';

@Component({
    selector: 'login-component',
    template: require('./login.html')
})

export class loginComponent {
    name: string;
    constructor(nameParam: string) {
        this.name = nameParam
    }
}
