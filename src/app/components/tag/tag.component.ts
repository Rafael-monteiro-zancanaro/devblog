import { Component, input } from '@angular/core';
import { CSSColor } from '../../data/language-map';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {

  bgColor = input.required<CSSColor>();
  name = input.required<string>();

}
