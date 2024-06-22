import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/home/todo/todo.component';
import { DirectivesComponent } from './components/toolbar/paths/directives/directives.component';
import { InputOutputComponent } from './components/toolbar/paths/input-output/input-output.component';
import { PipesComponent } from './components/toolbar/paths/pipes/pipes.component';
import { TwowaybindingComponent } from './components/toolbar/paths/twowaybinding/twowaybinding.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent },
  { path: 'InputOutput', component: InputOutputComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
