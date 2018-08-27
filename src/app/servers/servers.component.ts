import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  customClass = "button"
  serverAddedDetails = 'Server has not been created'

  constructor() {
    setTimeout(() => {
      this.customClass = "button is-primary"
    }, 2000)
  }
  
  updateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }

  serverAdded() {
    this.serverAddedDetails = 'Server has been added :-)'
  }

  ngOnInit() {
  }

}
