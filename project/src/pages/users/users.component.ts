import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList:string[] = ["naruto","onePiece","Bleach","FireForce","DeathNote"];

  // ngOnInit(): void {
  //   this.userList = ["naruto","onePiece","Bleach","FireForce","DeathNote"]
  // }
}