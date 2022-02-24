import { Component, OnInit } from '@angular/core';
import { DispResultComponent } from '../disp-result/disp-result.component';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  couleurpion = ["pink", "green", "blue", "red", "purple", "yellow", "brown"];
  combinaison = ["green", "blue", "blue", "red"];
  pcolor = ["white", "white", "white", "white"];
  nbreEssaisPossibles: number = 3; //10;
  cptCouleur: number = 0;
  
  
  constructor() {
  }

  ngOnInit(): void {
  }

  validate() {
    if (this.cptCouleur == 4){
      DispResultComponent.validate2()
      this.reset();
    }
  }

  reset() {
    this.cptCouleur = 0;
    this.pcolor = ["white", "white", "white", "white"];
  }

  choosecolor(i: number) {
    if (this.cptCouleur <= 3) {
      this.pcolor[this.cptCouleur] = this.couleurpion[i];
      this.cptCouleur++;
    }
  }
}
