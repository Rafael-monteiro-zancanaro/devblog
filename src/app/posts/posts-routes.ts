import { Routes } from "@angular/router";
import { CriacaoDevblogComponent } from "./criacao-devblog/criacao-devblog.component";
import { JstdComponent } from "./jstd/jstd.component";
import { MinhaExperienciaLinuxComponent } from "./minha-experiencia-linux/minha-experiencia-linux.component";

export const postsRoutes: Routes = [
  {
    path: "posts/criacao-devblog",
    component: CriacaoDevblogComponent,
  },
  {
    path: "posts/jstd",
    component: JstdComponent,
  },
  {
    path: "posts/minha-experiencia-linux",
    component: MinhaExperienciaLinuxComponent,
  },
];
