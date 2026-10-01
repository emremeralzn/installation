import { Component } from '@angular/core';
import { SERVICES } from '../../data/site-content';

@Component({ selector: 'app-services', standalone: true, templateUrl: './services.html' })
export class Services {
  protected readonly services = SERVICES;
}
