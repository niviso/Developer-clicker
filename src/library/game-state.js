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

    }
    startGame(){
        this.canInput = true;
        this.gameLoop = setInterval(x =>{
            this.user.setUnits(1);
            this.addReply(this.user.name + " units incresed by " + this.user.units);
        },1000);

    }
    killGame(){
        clearInterval(this.gameLoop);
    }

    addReply(reply){
        this.replies.push(reply);
        document.getElementById("body").scrollTo(0,document.getElementById("body").scrollHeight);
    }
}