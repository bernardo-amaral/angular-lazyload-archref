import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-screen1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './screen1.component.html',
  styleUrl: './screen1.component.scss',
})
export class Screen1Component {}
