import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';

//virtual scroll
import { ScrollingModule } from '@angular/cdk/scrolling';

// Drag and Drop
import { DragDropModule } from '@angular/cdk/drag-drop';

//rutas
import { AppRoutingModule } from './app.routing';

//componentes
import { AppComponent } from './app.component';
import { VirtualscrollComponent } from './pages/virtualscroll/virtualscroll.component';
import { DragComponent } from './pages/drag/drag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaisesComponent } from './pages/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualscrollComponent,
    DragComponent,
    NavbarComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
