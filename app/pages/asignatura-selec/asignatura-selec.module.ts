import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaSelecPageRoutingModule } from './asignatura-selec-routing.module';

import { AsignaturaSelecPage } from './asignatura-selec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaSelecPageRoutingModule
  ],
  declarations: [AsignaturaSelecPage]
})
export class AsignaturaSelecPageModule {}
