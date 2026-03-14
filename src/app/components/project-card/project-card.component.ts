import { Component, input } from '@angular/core';
import { GHRepo } from '../../domain/GHRepo';
import { ColorOf, CSSColor, Language } from '../../data/language-map';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  project = input.required<GHRepo>();

  get labelColorOfProject(): CSSColor {
    return ColorOf[this.project().language as Language] || '#FFF';
  }

}
