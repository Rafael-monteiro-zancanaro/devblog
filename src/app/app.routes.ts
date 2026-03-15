import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SetupComponent } from './pages/setup/setup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { postsRoutes } from './posts/posts-routes';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'setup',
        component: SetupComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    ...postsRoutes,
    {
        path: '**',
        component: NotFoundComponent
    },
];
