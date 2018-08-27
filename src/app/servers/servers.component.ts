import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  customClass = "button"
  serverAddedDetails = 'Server has not been created'
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.customClass = "button is-primary"
    }, 2000)
  }

  serverAdded() {
    this.serverAddedDetails = `Server has been added: ${this.serverName}`
  }

  ngOnInit() {
  }

}
