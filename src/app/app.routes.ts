import { Routes } from '@angular/router';
import { ProjectsComponent } from './views/projects/projects.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path: 'projects', component:ProjectsComponent
    }
];
