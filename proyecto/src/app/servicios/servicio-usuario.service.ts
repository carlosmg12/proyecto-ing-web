import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../interfaces/usuario";
import { Ticket } from "../interfaces/ticket";

const httpOptions={
  headers: new HttpHeaders({"Content-Type":"application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  ticketEditar:any;

  servidor="http://127.0.0.1:3000";

  constructor(private servicio:HttpClient) { }

  listarUsuarios():Observable<any>{
    return this.servicio.get(`${this.servidor}/listaUsuarios`);
  }

  listarTickets():Observable<any>{
    return this.servicio.get(`${this.servidor}/listaTickets`);
  }

  obtenerTicket(idTicket:number):Observable<any>{
    /*console.log("idTicket",idTicket);
    console.log(`${this.servidor}/obtenerTicket/:${idTicket}`);*/
    //this.ticketEditar=this.servicio.get(`${this.servidor}/obtenerTicket/${idTicket}`);
    //console.log("ticket editar servicio",this.ticketEditar);
    return this.servicio.get(`${this.servidor}/obtenerTicket/${idTicket}`);
  }

  ticket(ticket:Ticket){
    this.ticketEditar=ticket;
  }

  crearUsuario(usuario:Usuario):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearUsuario`,JSON.stringify(usuario),httpOptions);
  }

  crearTicket(ticket:Ticket):Observable<any>{
    console.log(`${this.servidor}/crearTicket/:${ticket.idUsuario}`);
    return this.servicio.post(`${this.servidor}/crearTicket/:${ticket.idUsuario}`,JSON.stringify(ticket),httpOptions);
  }

  actualizarTicket(ticket:Ticket):Observable<any>{
    return this.servicio.put(`${this.servidor}/editarTcket/${ticket.idTicket}`,JSON.stringify(ticket),httpOptions);
  }

}
