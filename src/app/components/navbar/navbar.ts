import { Component, signal } from '@angular/core';
import { BUSINESS } from '../../data/site-content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly business = BUSINESS;
  protected readonly menuOpen = signal(false);

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }
}
