import { Component, OnInit } from '@angular/core';
import data from '../../assets/tasks.json';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  dataSource=new MatTableDataSource<any>();
  displayedColumns=["task","expiryDate","users","important","action"];
  users:string[];



  ngOnInit(): void {
    // console.log(data.Users)
    this.dataSource.data=data.Tasks;
    this.users=data.Users
  }

  onClick(index){
   console.log(index)
   const originalList=this.dataSource.data;
   const newArray= originalList.splice(index,1);
   this.dataSource.data=originalList;
  }
}
