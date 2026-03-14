import { Component, inject, OnInit, signal } from '@angular/core';
import { GHRepo } from '../../domain/GHRepo';
import { GithubService } from '../../services/github-service';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-home',
  imports: [ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ghService = inject(GithubService);
  repos = signal<GHRepo[]>([]);


  ngOnInit(): void {
    this.ghService.getRepos().subscribe(repos => {
      this.repos.set(repos)
      console.log(this.repos().map(repo => repo.language))
    });
  }


}
