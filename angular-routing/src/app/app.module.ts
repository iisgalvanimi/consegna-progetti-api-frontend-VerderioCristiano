import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponentComponent,
    AnimalsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
