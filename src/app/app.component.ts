import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthentificationService } from './authentification.service';
import {ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, ContactComponent],
})
export class AppComponent {
  title = 'backoffice-spring-cda-24';

  authentification = inject(AuthentificationService);

  ngOnInit() {
    this.authentification.authentificationAvecJwtLocalStorage();
  }
}
