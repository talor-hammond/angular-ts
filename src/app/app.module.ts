// app.module.ts: bundles the functionalities of our app

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component'
import ServerComponent from './server/server.component'
import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [ 
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [ // allows us to import and reference other modules inside this 'root' NgModule
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrap the 'AppComponent' when the application starts
})
export class AppModule { }
