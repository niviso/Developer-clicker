import { inject } from 'aurelia-framework';
import {LocalStorageHelper } from 'helpers/local-storage-helper';
import {User} from 'library/user';
@inject(LocalStorageHelper,User)
export class GameState{
    constructor(LocalStorageHelper, user){
        this.LocalStorageHelper = LocalStorageHelper;
        this.user = user;
        this.isRunning = false;
        this.canInput = true;
        this.replies = [];
        this.inputs = [];

    }
    startGame(){
        this.canInput = true;
        this.isRunning = true;
        this.gameLoop = setInterval(x =>{
            this.user.updateUnits();
            this.addReply(this.user.name + " units incresed by " + this.user.units);
        },1000);

    }
    killGame(){
        this.isRunning = false;
        clearInterval(this.gameLoop);
    }

    addReply(reply){
        this.replies.push(reply);
        document.getElementById("output").scrollTo(0,document.getElementById("output").scrollHeight);
    }
    addInput(input){
        this.inputs.push(input);
        document.getElementById("input").scrollTo(0,document.getElementById("input").scrollHeight);
    }
}