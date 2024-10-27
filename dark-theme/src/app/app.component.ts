import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Components1Component } from './components/components-1/components-1.component';
import { Components2Component } from './components/components-2/components-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Components1Component, Components2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dark-theme';

  constructor(public themeService: ThemeService) { }
}
