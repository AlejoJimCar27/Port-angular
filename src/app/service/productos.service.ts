import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = []; 

  constructor( private http: HttpClient ) { 

    this.cargarProductos();

  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-7e9f3.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      }); 

    });
  }

  getProducto (id: string){
    return this.http.get(`https://angular-html-7e9f3.firebaseio.com/productos/${ id }.json`);
  }

  buscarproductos( termino: string ){

    if ( this.productos.length == 0 ) {
      // Carga pro
      this.cargarProductos().then( ()=> {
        // ejecut des pro
        // aplicar
        this.filtrarProductos( termino );
      });
    }else{
      // aplicar fil
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos(termino:string){

    console.log(this.productos);
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      let tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 ||tituloLower.indexOf(termino) >= 0 ){
        this.productosFiltrados.push(prod);
      }

    });
  }

}
