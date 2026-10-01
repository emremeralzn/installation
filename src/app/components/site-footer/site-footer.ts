import { Component } from '@angular/core';
import { BUSINESS } from '../../data/site-content';

@Component({ selector: 'app-site-footer', standalone: true, templateUrl: './site-footer.html' })
export class SiteFooter {
  protected readonly business = BUSINESS;
  protected readonly currentYear = new Date().getFullYear();
}
