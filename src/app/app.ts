import { Component, HostListener } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { SiteFooter } from './components/site-footer/site-footer';
import { Home } from './pages/home/home';
import { BUSINESS } from './data/site-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly business = BUSINESS;
  protected showScrollTop = false;

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 500;
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
