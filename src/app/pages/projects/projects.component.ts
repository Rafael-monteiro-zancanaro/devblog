import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { GHRepo } from '../../domain/GHRepo';
import { GithubService } from '../../services/github-service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  ghService = inject(GithubService);
  repos = signal<GHRepo[]>([]);


  ngOnInit(): void {
    this.ghService.getRepos().subscribe(repos => {
      this.repos.set(
        repos.sort((prev, curr) => new Date(curr.created_at).getTime() - new Date(prev.created_at).getTime())
      )
    });
  }
}
