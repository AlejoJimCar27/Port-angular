import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { productoDescrip } from '../../service/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productoDescrip;
  proId: string;

  constructor( private router: ActivatedRoute, 
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.router.params
        .subscribe( parametros =>{
          // console.log(parametros['proId']);
          this.productoService.getProducto(parametros['proId'])
          .subscribe( (producto: productoDescrip) => {
            this.producto = producto;
            this.proId = parametros['proId'];
          });
        });
  }

}
