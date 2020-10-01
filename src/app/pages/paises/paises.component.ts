import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];
  constructor( public _paises: PaisesService ) { }

  ngOnInit(): void {
    this._paises.getPaises().subscribe(
      (paises: any) => {
        this.paises = paises;
      }
    );
  }

  drop( evento: CdkDragDrop<any> ){

    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );

    console.log( this.paises );
    
    
  }

}
