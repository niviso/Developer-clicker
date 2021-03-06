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
            this.addReply("Units: " + this.user.units + " | Modifier: " + this.user.upgrades.getTotalModifier());
        },1000);

    }
    killGame(){
        this.isRunning = false;
        clearInterval(this.gameLoop);
    }

    addReply(reply){
        this.replies.push(reply);
        setTimeout(x =>{
            document.getElementById("output").scrollTo(0,document.getElementById("output").scrollHeight);
        },10);
    }
    addInput(input){
        this.inputs.push(input);
        setTimeout(x =>{
            document.getElementById("input").scrollTo(0,document.getElementById("input").scrollHeight);
        },10);
    }
}
