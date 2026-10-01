import { Component } from '@angular/core';
import { ADVANTAGES, BUSINESS, PROCESS_STEPS } from '../../data/site-content';

@Component({ selector: 'app-content-sections', standalone: true, templateUrl: './content-sections.html' })
export class ContentSections {
  protected readonly business = BUSINESS;
  protected readonly advantages = ADVANTAGES;
  protected readonly processSteps = PROCESS_STEPS;
}
