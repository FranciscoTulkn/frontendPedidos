import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { AsignarPedidoComponent } from './asignar-pedido/asignar-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { EliminarPedidoComponent } from './eliminar-pedido/eliminar-pedido.component';
import { BuscarPedidoComponent } from './buscar-pedido/buscar-pedido.component';


@NgModule({
  declarations: [
    AsignarPedidoComponent,
    EditarPedidoComponent,
    EliminarPedidoComponent,
    BuscarPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
