import { Component } from '@angular/core';

export interface ToDo {
  description: string;
  assignedPerson: string;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public toDoList: ToDo[];
  public filterIsOn: boolean;
  public filterPersonName:string;
  public newToDo:ToDo;
  public people: string[];
  constructor() {
    this.toDoList = [
      { description: 'Test', assignedPerson: 'Derntl', isDone: true },
      { description: 'Test2', assignedPerson: 'Elias', isDone: false },
    ];
    this.filterIsOn = false;
    this.filterPersonName = '';
    this.newToDo = {description:'',assignedPerson:'',isDone:false};
    this.people = ['','Derntl','Elias','Thomas'];
  }

  public filter(toDoItem:ToDo):boolean{
    return(this.filterIsOn && toDoItem.isDone) || (this.filterPersonName !== toDoItem.assignedPerson && this.filterPersonName !== '')
  }

  public addNewToDo():void{
    this.toDoList.push(this.newToDo);
  }
  public onButtonDelete(rowIx:number):void{
    this.toDoList.splice(rowIx,1);
  }
}
