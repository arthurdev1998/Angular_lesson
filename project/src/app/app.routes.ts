import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { UsersComponent } from '../pages/users/users.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserComponent } from './src/app/_components/user/user.component';

export const routes: Routes = [
    // {
    //     path: "home",
    //     component : HomeComponent
    // },
    { path: "user/list", component: UsersComponent },
    { path: "user/:username", component: UserComponent },
    { path: "user/details", component: UserComponent }
];