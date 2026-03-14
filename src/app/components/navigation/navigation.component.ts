import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgHeroiconsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
