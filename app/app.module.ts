import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MyTutorialComponent} from './MyComponent/my-tutorial.component'
import {HttpModule} from '@angular/http';


@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent,MyTutorialComponent],
    bootstrap:    [ AppComponent ]
})


export class AppModule { }