import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyChoiceComponent } from './components/my-choice/my-choice.component';

const routes: Routes = [
  {
    path: 'my-choice',
    component: MyChoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
