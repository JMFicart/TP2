import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  couleurpion = ["pink", "green", "blue", "red", "purple", "yellow", "brown"];
  pcolor = ["white", "white", "white", "white"];
  ptrcouleur: number = 0;
  
  oTable: HTMLTableElement;
  oTable = document.getElementById('tblresultat');
  // aoBts = this.oTable.getElementsByClassName('bt');

  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    console.log("Validate")
    // Copier les couleurs dans la table resultat.
    // this.aoBts = this.oTable.getElementsByClassName('bt');
    // for(var i = 0; i<this.aoBts.length; i++){
    //   aoBts[i].addEventListener('click',  deplaceColonne);
    // }
  }

  reset() {
    this.ptrcouleur = 0;
    this.pcolor = ["white", "white", "white", "white"];
  }

  choosecolor(i: number) {
    if (this.ptrcouleur <= 3) {
      this.pcolor[this.ptrcouleur] = this.couleurpion[i];
      this.ptrcouleur++;
    }
  }
}
