import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMastermindComponent } from './components/main-mastermind/main-mastermind.component';
import { DispResultComponent } from './components/disp-result/disp-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    HeaderComponent,
    MainMastermindComponent,
    DispResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
