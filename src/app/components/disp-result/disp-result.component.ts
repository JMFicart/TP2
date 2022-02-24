import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp-result',
  templateUrl: './disp-result.component.html',
  styleUrls: ['./disp-result.component.css']
})
export class DispResultComponent implements OnInit {
  eColor: Array<string[]> = [];
  eBGColor: Array<string[]> = [];
  nbreCorrect:number = 0;
  trouve:boolean = false;
  cptEssai:number = 0;
  
  constructor() {
    for(var i=0;i<3;i++){
      this.eColor.push(["","","",""]);
      this.eBGColor.push(["white", "white", "white", "white"]);
    }
  }

  ngOnInit(): void {
  }

  validate2(){
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
  }

  checkResult():boolean {
    this.nbreCorrect = 0;
    for(var i = 0; i < 4; i++){
      if(this.eColor[this.cptEssai][i]==this.combinaison[i]){
        // bg green
        this.eBGColor[this.cptEssai][i] = "green";
        this.nbreCorrect++;
      }
      else {
        this.trouve = false;
        for(var j = 0; j < 4; j++){
          if(this.eColor[this.cptEssai][i]==this.combinaison[j]){
            if(this.eColor[this.cptEssai][i]!=this.eColor[this.cptEssai][j]){
              this.trouve = true;
            }
            j = 4;
          }
        }
        if(this.trouve==true){
          // bg yellow
          this.eBGColor[this.cptEssai][i] = "yellow";
        }else{
          // bg red
          this.eBGColor[this.cptEssai][i] = "red";
        }
      }
    }

    return (this.nbreCorrect == 4);
  }
  
}
