import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-components-2',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './components-2.component.html',
  styleUrl: './components-2.component.scss'
})
export class Components2Component {

  constructor() { }
}
