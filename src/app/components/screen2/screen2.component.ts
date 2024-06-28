import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-screen2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './screen2.component.html',
  styleUrl: './screen2.component.scss',
})
export class Screen2Component {}
