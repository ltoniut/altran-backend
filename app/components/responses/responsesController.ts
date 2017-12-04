import { Component } from 'angular2-cli';

@Component({
    selector: 'responses-component',
    template: require('./responses.html')
})

export class responsesComponent {
    name: string;
    userData: string;
    policiesData: string;
    constructor(nameParam: string, userData: string, policiesData: string) {
        this.name = nameParam
        this.userData = userData
        this.policiesData = policiesData
    }
}
