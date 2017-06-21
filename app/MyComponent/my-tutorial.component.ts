import { Component,Input,Output,EventEmitter } from "@angular/core";


@Component({
    selector:"my-tutorial",
    template:`
        <h1>{{name}}</h1>
        <button [disabled]="voted" (click)="vote(true)">Agree</button>
        <button [disabled]="voted" (click)="vote(false)">Disgree</button>
        Result of vote: {{voted}}
    `
})

export class MyTutorialComponent {
    @Input() name:string;   
    @Output() onVote = new EventEmitter<boolean>();

    public voted:boolean =false;

    setName(name:string){
        this.name = name;
    }

    vote(agree:boolean){
        this.voted = true;
        this.onVote.emit();
    }
}