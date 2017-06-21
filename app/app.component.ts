import { Component,ViewChild } from '@angular/core';
import { MyTutorialComponent } from "./MyComponent/my-tutorial.component";

@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html',
    styles:['h1 {color:blue;}']
})
export class AppComponent  {
    public title = "ANGULARJS 2 tutorial"
    public agree:number = 0;
    public disgree:number = 0;

    public names = ["Mr A","Mr B","Mr C","Mr D"];
    txtName:string;
    private parentVote(agree:boolean) {
        if (agree) {
            this.agree++;
        }else{
            this.disgree++;
        }
    }
    @ViewChild(MyTutorialComponent)
    private tutorialComponent:MyTutorialComponent;
    changeName(value:string){
        console.log('test');
        this.tutorialComponent.setName(value);
    }
}