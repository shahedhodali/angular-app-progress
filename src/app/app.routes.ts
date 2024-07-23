import { Routes } from '@angular/router';
import { FieldSimulationComponent } from './Components/field-simulation/field-simulation.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'progress',
        pathMatch: 'full'
    },
    {
        path: 'progress',
        component: FieldSimulationComponent
    }
];