import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtensionsComponent } from './extensions/extensions.component';

const routes: Routes = [
  { path: '**', component: ExtensionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
