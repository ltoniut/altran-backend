import { Component } from 'angular2-cli';

@Component({
    selector: 'requests-component',
    template: require('./requests.html')
})

export class requestsComponent {
    name: string;
    constructor(nameParam: string) {
        this.name = nameParam
    }
}
