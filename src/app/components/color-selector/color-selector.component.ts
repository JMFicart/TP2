import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  couleurpion = ["pink", "green", "blue", "red", "purple", "yellow", "brown"];
  combinaison = ["green", "blue", "blue", "red"];
  pcolor = ["white", "white", "white", "white"];
  eColor: Array<string[]> = [];
  eBGColor: Array<string[]> = [];
  nbreEssaisPossibles: number = 3; //10;
  cptCouleur: number = 0;
  cptEssai:number = 0;
  
  constructor() {
    for(var i=0;i<3;i++){
      this.eColor.push(["","","",""]);
      this.eBGColor.push(["white", "white", "white", "white"]);
    }
  }

  ngOnInit(): void {
  }

  validate() {
    if (this.cptCouleur == 4){
      // Copier les couleurs dans la table resultat.
      for(var i = 0; i<4; i++){
        this.eColor[this.cptEssai][i]=this.pcolor[i];
      }

      if(this.checkResult() == true){
        alert('Vous avez gagné !');
      } else
      {
        this.cptEssai++;
        if (this.cptEssai==3) {
          alert('Vous avez perdu !');
        }
      } 
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

  checkResult():boolean {
    return false;
  }

}
