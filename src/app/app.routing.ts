import { Routes, RouterModule } from '@angular/router';
import { VirtualscrollComponent } from './pages/virtualscroll/virtualscroll.component';
import { DragComponent } from './pages/drag/drag.component';
import { PaisesComponent } from './pages/paises/paises.component';

export const routes: Routes = [
    { path: 'virtual', component: VirtualscrollComponent },
    { path: 'drag', component: DragComponent },
    { path: 'paises', component: PaisesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'virtual' }
];

export const AppRoutingModule = RouterModule.forRoot( routes );