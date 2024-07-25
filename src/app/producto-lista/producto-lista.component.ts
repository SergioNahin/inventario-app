import { Component } from '@angular/core';
import { Producto  } from '../producto';
import { ProductoService } from '../producto.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService){}

  ngOnInit(){
    //Carga Productos
    this.obtenerProductos();
  }
   private obtenerProductos(){
    //Consumir los datos del observable
    this.productoServicio.obtenerProductosLista().subscribe(
      datos => {
        this.productos = datos;
      }
    )
   }
}
