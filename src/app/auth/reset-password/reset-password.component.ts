import { Component } from '@angular/core';

@Component({
  selector: 'reset-password',
  standalone: false,
  
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      if (this.newPassword !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }
      // Logique pour réinitialiser le mot de passe
      console.log('Email:', this.email);
      console.log('Nouveau mot de passe:', this.newPassword);
      form.reset();
    }
  }

}
