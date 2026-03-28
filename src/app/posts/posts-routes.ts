import { Routes } from "@angular/router";
import { CriacaoDevblogComponent } from "./criacao-devblog/criacao-devblog.component";
import { JstdComponent } from "./jstd/jstd.component";

export const postsRoutes: Routes = [
    {
        path: 'posts/criacao-devblog',
        component: CriacaoDevblogComponent
    },
    {
        path: 'posts/jstd',
        component: JstdComponent
    }
]