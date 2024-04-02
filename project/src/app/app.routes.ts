import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../pages/users/users.component';
import { UserComponent } from './src/app/_components/user/user.component';
import { UserCardComponent } from './src/app/_components/user-card/user-card.component';

export const routes: Routes = [
    // {
    //     path: "home",
    //     component : HomeComponent
    // },
    { path: "user/list", component: UsersComponent },
    { path: "user/:username", component: UserComponent },
    { path: "user/details", component: UserComponent },
    { path: "user/cards", component: UserCardComponent }
];