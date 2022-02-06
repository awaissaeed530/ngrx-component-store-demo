import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './pos.component';
import { PosStore } from './pos.store';

const routes: Routes = [
  { path: '', component: PosComponent }
];

@NgModule({
  declarations: [
    PosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PosStore
  ]
})
export class PosModule {
}
