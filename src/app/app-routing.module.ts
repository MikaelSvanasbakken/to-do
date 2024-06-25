import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/home/todo/todo.component';
import { DirectivesComponent } from './components/toolbar/paths/directives/directives.component';
import { InputOutputComponent } from './components/toolbar/paths/input-output/input-output.component';
import { PipesComponent } from './components/toolbar/paths/pipes/pipes.component';
import { TwowaybindingComponent } from './components/toolbar/paths/twowaybinding/twowaybinding.component';
import { SignalComponent } from './components/toolbar/paths/signals/signal/signal.component';
import { ObservableComponent } from './components/toolbar/paths/observable/observable.component';


const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent },
  { path: 'inputOutput', component: InputOutputComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'observable', component: ObservableComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }