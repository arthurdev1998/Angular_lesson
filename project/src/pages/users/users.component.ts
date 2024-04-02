import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from '../../app/src/app/_components/user-card/user-card.component';
import { User } from '../../app/src/app/_models/User';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersComponent, RouterModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList:User[] = [
    {
      nome: "Gojo",
      idade : 28
    },
    {
      nome: "Geto",
      idade : 28
    },
    {
      nome: "Sukuna",
      idade : 1000
    },
    {
      nome: "Itadori",
      idade : 15
    },
    {
      nome: "Megumi",
      idade : 15
    },


    
  ];

  // ngOnInit(): void {
  //   this.userList = ["naruto","onePiece","Bleach","FireForce","DeathNote"]
  // }
}