import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  customClass = "button"

  constructor() {
    setTimeout(() => {
      this.customClass = "button is-primary"
    }, 2000)
  }

  ngOnInit() {
  }

}
