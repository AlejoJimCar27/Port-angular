import { Component } from '@angular/core';
import { InfoPaginaService } from './service/infopagina.service';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: ProductosService){

  }
}
