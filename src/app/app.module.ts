import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// FOR SERVER 2
import { AppRoutingModule } from './app-routing.module';
import { Server2Component } from './server2/server2.component';

// FOR CUSTOM DIRECTIVE
import { CustomDirectiveStylesDirective } from './custom-directive-styles/custom-directive-styles.directive';

// FOR CUSTOM DIRECTIVE
@NgModule({
  declarations: [
    AppComponent,
    Server2Component, // server 2
    CustomDirectiveStylesDirective  // custom directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // server 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// FOR SERVER 2 COMPONENT

// @NgModule({
//   declarations: [
//     AppComponent,
//     Server2Component
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
