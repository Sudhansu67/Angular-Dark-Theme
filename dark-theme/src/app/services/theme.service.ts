import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private theme: string = "light-theme";

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  toggleTheme(): void {
    const theme = this.theme === "light-theme" ? "dark-theme" : "light-theme";
    this.setTheme(theme);
  }

  setTheme(theme: string): void {
    this.renderer.removeClass(document.body, this.theme);
    this.renderer.addClass(document.body, theme);
    this.theme = theme;
  }


  get currentTheme(): string {
    return this.theme;
  }

}
