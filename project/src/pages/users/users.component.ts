import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList:string[] = ["naruto","onePiece","Bleach","FireForce","DeathNote"];

  // ngOnInit(): void {
  //   this.userList = ["naruto","onePiece","Bleach","FireForce","DeathNote"]
  // }
}