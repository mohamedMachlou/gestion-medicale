import { Component } from '@angular/core';

@Component({
  selector: 'register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isPatientFormActive: boolean = true;

  toggleForm(formType: string) {
    this.isPatientFormActive = formType === 'patient';
  }

}
