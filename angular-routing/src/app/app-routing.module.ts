import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { GenericComponentComponent } from './generic-component/generic-component.component';

const routes: Routes = [
  { path: 'animals', component:AnimalsComponentComponent},
  { path: 'fruits', component: FruitsComponentComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  {path: '', redirectTo: '/fruits', pathMatch: 'full'},
  { path: 'generic/:id', component: GenericComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
