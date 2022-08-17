import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { TodoComponent } from './components/home/todo/todo.component';
import { BoxComponent } from './components/box/box.component';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//PrimeNg imports
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {MenubarModule} from 'primeng/menubar';
import {MultiSelectModule} from 'primeng/multiselect';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InputOutputComponent } from './components/toolbar/paths/input-output/input-output.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayInputComponent } from './components/toolbar/paths/input-output/display-input/display-input.component';
import { DisplayOutputComponent } from './components/toolbar/paths/input-output/display-output/display-output.component';
import { TwowaybindingComponent } from './components/toolbar/paths/twowaybinding/twowaybinding.component';
import { PipesComponent } from './components/toolbar/paths/pipes/pipes.component';
import { DirectivesComponent } from './components/toolbar/paths/directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TodoComponent,
    ToolbarComponent,
    InputOutputComponent,
    HomeComponent,
    DisplayInputComponent,
    DisplayOutputComponent,
    TwowaybindingComponent,
    PipesComponent,
    DirectivesComponent,
    BoxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    ListboxModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
