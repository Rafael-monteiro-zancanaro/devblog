import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GHRepo } from "../domain/GHRepo";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  httpClient = inject(HttpClient);

  public getRepos(): Observable<GHRepo[]> {
    return of([
      {
        name: "jstd",
        description: "",
        html_url: "https://github.com/Rafael-monteiro-zancanaro/jstd",
        language: "Java",
        created_at: "",
        archived: false,
      },
      {
        name: "dmrs",
        description: "Discrete Math for Rust",
        html_url: "https://github.com/Rafael-monteiro-zancanaro/dmrs",
        language: "Rust",
        created_at: "",
        archived: false,
      },
      {
        name: "passgen",
        description: "A simple password generator",
        html_url: "https://github.com/Rafael-monteiro-zancanaro/passgen",
        language: "C",
        created_at: "",
        archived: false,
      },
      {
        name: "nixos-config",
        description: "My NixOS configuration",
        html_url: "https://github.com/Rafael-monteiro-zancanaro/nixos-config",
        language: "Nix",
        created_at: "",
        archived: false,
      },
    ]);
  }
}
