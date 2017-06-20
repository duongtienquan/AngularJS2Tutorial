import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule} from '@angular/http';


export function restangular (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://5944f686cf46400011a81285.mockapi.io/vtvcab/');
    // RestangularProvider.setDefaultRequestParams({
    //     apikey: '586680ad69ce295b1738efe5'
    // });
    // RestangularProvider.setRestangularFields({
    //     id: "_id"
    // });
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})


export class AppModule { }