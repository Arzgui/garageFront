import { Component, inject, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthentificationService } from "../authentification.service";


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  utilisateur = {
    voiture: [{
      plaqueVoiture: 'ABC123',
      idModeleVoiture: {
        nomModele: 'Model X',
        marqueVoiture: {
          nomMarque: 'Tesla'
        }
      }
    }]
  };

  menuItems = [
    { id: 1, title: 'Ajoutez votre voiture', buttonText: 'Ajoutez votre voiture', routerLink: '/entretien' },
    { id: 2, title: 'Prendre rendez-vous', buttonText: 'Prendre rendez-vous', routerLink: '/ajout-reservation' },
    { id: 3, title: 'Louez un box', buttonText: 'Louez un box', routerLink: '/ajout-box', visibleRoles: ['ROLE_ADH'] }
  ];
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  authentification = inject(AuthentificationService);


  Idutilisateur: number = this.authentification.utilisateur.id;

  ngOnInit(): void {
    this.getUtilisateurInfo(this.Idutilisateur);
  }

  getUtilisateurInfo(id: number): void {
    // Ajoutez les en-têtes d'authentification si nécessaire
    const token = this.authentification.authentificationAvecJwtLocalStorage(); // Assurez-vous d'avoir une méthode pour récupérer le token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http
      .get<any>(`http://localhost:8080/utilisateur/${id}`, { headers })
      .subscribe(
        (utilisateur) => {
          this.utilisateur = utilisateur;
          console.log('Utilisateur :', this.utilisateur);
        },
        (error) => {
          console.error('Error fetching user information:', error);
        }
      );
  }
}
