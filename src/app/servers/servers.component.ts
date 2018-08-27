import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  customClass = "button"
  serverName = ''
  serverAdded = false

  constructor() {
    setTimeout(() => {
      this.customClass = "button is-primary"
    }, 2000)
  }

  onServerAdded() {
    this.serverAdded = true
  }

  ngOnInit() {
  }

}
