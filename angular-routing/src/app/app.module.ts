import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericComponentComponent } from './generic-component/generic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponentComponent,
    AnimalsComponentComponent,
    GenericComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
