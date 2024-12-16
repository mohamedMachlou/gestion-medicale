import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-medecin',
  standalone: false,
  
  templateUrl: './dashboard-medecin.component.html',
  styleUrl: './dashboard-medecin.component.css'
})
export class DashboardMedecinComponent {
  dashboardCards = [
    {
      title: 'Patients',
      content: 'Gérer les informations des patients.'
    },
    {
      title: 'Consultations',
      content: 'Voir et planifier les consultations.'
    },
    {
      title: 'Dossiers Médicaux',
      content: 'Accéder aux dossiers médicaux des patients.'
    },
    {
      title: 'Rendez-vous',
      content: 'Gérer les rendez-vous avec les patients.'
    },
    {
      title: 'Recherche',
      content: 'Rechercher des patients et des dossiers.'
    }
  ];
}
