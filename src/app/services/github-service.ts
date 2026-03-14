import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GHRepo } from "../domain/GHRepo";

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    httpClient = inject(HttpClient);
    readonly API_URL: string = `https://api.github.com/users/Rafael-monteiro-zancanaro/repos`


    public getRepos(): Observable<GHRepo[]> {
        return this.httpClient.get<GHRepo[]>(this.API_URL);
    }
}