import { Component } from '@angular/core' // decorator that marks a class as an angular component...

@Component({
    selector: 'app-server', // convention: `app-${componentName}`
    templateUrl: './server.component.html'
})

export default class ServerComponent {
    name = 'Tay'
    age = 21

    getAge() {
        return this.age
    }
}