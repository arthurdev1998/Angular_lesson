import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { UsersComponent } from '../pages/users/users.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // {
    //     path: "home",
    //     component : HomeComponent
    // },
    {
        path: "user/list",
        component : UsersComponent
    }
];