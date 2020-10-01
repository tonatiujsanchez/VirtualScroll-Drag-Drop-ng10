import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.css']
})
export class VirtualscrollComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;
  
  personas = Array(1000).fill(0);
  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal(){
    this.viewport.scrollToIndex( this.personas.length );
  }
  irInicio(){
    this.viewport.scrollToIndex( 0 );
  }
  irMitad(){
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }

}
