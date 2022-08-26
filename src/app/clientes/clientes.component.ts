import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  constructor(private clientesService: ClienteService) {}

  clientes: Cliente[] = [];
  currentClient: Cliente;
  crudOperation: any = { isNew: false, isVisible: false };
  confirm:boolean = false;
  query:string = '';

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getClientes(this.query).subscribe((clientes) => {
      this.clientes = Object.values(clientes);
      this.currentClient = new Cliente();
      console.log(clientes);
    });
  }

  new() {
    this.currentClient = new Cliente();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  setCliente() {
    if (this.crudOperation.isNew) {
      this.clientesService.setCliente(this.currentClient).subscribe((res) => {
        this.currentClient = new Cliente();
        this.crudOperation.isVisible = false;
        this.getClientes();
      });
      return;
    }
    this.clientesService.updateCliente(this.currentClient).subscribe((res) => {
      this.currentClient = new Cliente();
      this.crudOperation.isVisible = false;
      this.getClientes();
    });
  }

  edit(row:any) {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.currentClient = row;
  }

  delete(id:number){
    this.clientesService.deleteCliente(id).subscribe(res => {
      this.crudOperation.isNew = false;
      this.getClientes();
    })
  }
}
