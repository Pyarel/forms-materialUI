import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import data from '../../assets/tasks.json';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  users:any;
  Task:string;
  Expiry_date:Date;
  User:any;
  Important:boolean=false;


  constructor() { }
  flagName="outlined_flag";
  ngOnInit(): void {
    this.users=data.Users;
  }
  onClick(flag){
    if(flag=="outlined_flag"){
      this.flagName="flag";
      this.Important=true;
    }
    else{
      this.flagName="outlined_flag";
      this.Important=false;
    }
  }
  onSubmit(form:NgForm){
     if(form.invalid){
       return;
     }
     else{
       const task={
         "Task":form.value.Task,
         "Expiry_date": form.value.Expiry_date,
         "User":form.value.User,
         "Important":this.Important
       }
       console.log(task);
       alert("Task Added!!."+ " Expiry Date is : "+ form.value.Expiry_date  );
     }
  }

}
