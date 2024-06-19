import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    {
      title: 'Stagiaire Mécanicien',
      name: 'Nordine',
      phone: '+48 123 456 789',
      email: 'test@gmail.com'
    },
    {
      title: 'CEO',
      name: 'Karim',
      phone: '0675847546',
      email: 'test2@gmail.com'
    }
  ];
}
