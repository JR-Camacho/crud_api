import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  clientes:Cliente[] = [];

  getClientes(query:string = ''){
    return this.http.get('https://clientesdemo.herokuapp.com/clientes', {params: {buscar:query}});
  }

  setCliente(cliente:Cliente){
    return this.http.post('https://clientesdemo.herokuapp.com/clientes', cliente);
  }

  updateCliente(cliente:Cliente){
    return this.http.put(`https://clientesdemo.herokuapp.com/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(id:number){
    return this.http.delete(`https://clientesdemo.herokuapp.com/clientes/${id}`);
  }
}
