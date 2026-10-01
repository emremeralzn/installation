import { Component } from '@angular/core';
import { BUSINESS } from '../../data/site-content';

@Component({ selector: 'app-hero', standalone: true, templateUrl: './hero.html' })
export class Hero {
  protected readonly business = BUSINESS;
}
