// app.module.ts: bundles the functionalities of our app

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// Components
import { AppComponent } from './app.component'
import ServerComponent from './server/server.component'

@NgModule({
  declarations: [ 
    AppComponent,
    ServerComponent
  ],
  imports: [ // allows us to import and reference other modules inside this 'root' NgModule
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrap the 'AppComponent' when the application starts
})
export class AppModule { }
