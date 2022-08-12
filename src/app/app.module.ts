import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { TodoComponent } from './components/home/todo/todo.component';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//PrimeNg imports
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {MenubarModule} from 'primeng/menubar';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InputOutputComponent } from './components/toolbar/paths/input-output/input-output.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayValueComponent } from './components/toolbar/paths/input-output/display-value/display-value.component';
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
    DisplayValueComponent,
    DisplayOutputComponent,
    TwowaybindingComponent,
    PipesComponent,
    DirectivesComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
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
