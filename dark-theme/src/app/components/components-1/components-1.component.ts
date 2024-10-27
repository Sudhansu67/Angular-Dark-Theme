import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-components-1',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './components-1.component.html',
  styleUrl: './components-1.component.scss'
})
export class Components1Component {

  constructor() { }
}
