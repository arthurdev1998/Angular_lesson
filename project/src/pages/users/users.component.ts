import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from '../../app/src/app/_components/user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersComponent, RouterModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList:string[] = ["naruto","onePiece","Bleach","FireForce","DeathNote"];

  // ngOnInit(): void {
  //   this.userList = ["naruto","onePiece","Bleach","FireForce","DeathNote"]
  // }
}