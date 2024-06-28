import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-screen3',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './screen3.component.html',
  styleUrl: './screen3.component.scss',
})
export class Screen3Component {}
