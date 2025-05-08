import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `<ion-app><ion-router-outlet></ion-router-outlet></ion-app>`,
})
export class AppComponent {}
