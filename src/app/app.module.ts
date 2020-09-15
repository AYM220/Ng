import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    // AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
