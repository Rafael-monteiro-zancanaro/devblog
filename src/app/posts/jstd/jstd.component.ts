import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { GHRepo } from '../../domain/GHRepo';

@Component({
  selector: 'app-jstd',
  imports: [TitleComponent, ProjectCardComponent],
  templateUrl: './jstd.component.html',
  styleUrl: './jstd.component.css'
})
export class JstdComponent {

  jstdProject = signal<GHRepo>({
    archived: false,
    created_at: '2025-03-26T22:00',
    description: 'Conjunto de utilidades Zero-Dependency, projetadas para apenas copiar, colar e utilizar',
    html_url: 'https://github.com/Rafael-monteiro-zancanaro/jstd',
    language: 'Java',
    name: 'jstd'
  })

}
