import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMastermindComponent } from './components/main-mastermind/main-mastermind.component';

const routes: Routes = [
  // ne pas oublier le pathMatch: 'full', sinon boucle inf.
//   { path:"", redirectTo:"accueil", pathMatch:'full' },
//   { path:"accueil", component: AccueilComponent },
  // C'est le DemoModule qui s'occupe de ses propre route
//   { path:"Mastermind", loadChildren: () => import('./components/demo.module').then(m => m.DemoModule) }
//   { path:"", component:AppComponent},
  // { path:"color-selector", component:ColorSelectorComponent},
  { path:"main-mastermind", component:MainMastermindComponent}
  // "**" s'active pour toutes les routes, c'est une wildcard
//   { path:"**", redirectTo:"404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot parce que racine
  exports: [RouterModule]
})
export class AppRoutingModule { }
