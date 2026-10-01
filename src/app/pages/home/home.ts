import { Component } from '@angular/core';
import { ContentSections } from '../../components/content-sections/content-sections';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Services, ContentSections],
  templateUrl: './home.html',
})
export class Home {}
