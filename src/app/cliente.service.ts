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
    return this.http.get('http://127.0.0.1:8000/clientes', {params: {buscar:query}});
  }

  setCliente(cliente:Cliente){
    return this.http.post('http://127.0.0.1:8000/clientes', cliente);
  }

  updateCliente(cliente:Cliente){
    return this.http.put(`http://127.0.0.1:8000/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(id:number){
    return this.http.delete(`http://127.0.0.1:8000/clientes/${id}`);
  }
}
