import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FooterComponent } from './src/app/_components/footer/footer.component';
import { NavbarComponent } from './src/app/_components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from './src/app/_components/base-ui/base-ui.component';
import { UsersComponent } from '../pages/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NavbarComponent, AppComponent, CommonModule, BaseUiComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  exibirHome: boolean = true;
  ususrios: string[] = ["samira", "lux", "velbeth"];
  number: number = 0;
  destruir() {
    this.exibirHome = !this.exibirHome;
  }
  contador() {
    this.number++
  }
}
