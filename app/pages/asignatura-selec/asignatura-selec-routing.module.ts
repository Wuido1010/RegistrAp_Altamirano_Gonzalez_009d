import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaSelecPage } from './asignatura-selec.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaSelecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaSelecPageRoutingModule {}
