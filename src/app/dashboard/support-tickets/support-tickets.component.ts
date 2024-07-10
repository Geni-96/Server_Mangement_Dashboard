import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
    selector: 'app-support-tickets',
    standalone: true,
    templateUrl: './support-tickets.component.html',
    styleUrl: './support-tickets.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class SupportTicketsComponent {
    tickets: Ticket[] = [];

    onAddTicket(ticketData:{title:string, text:string}){
        const ticket: Ticket = {
            title: ticketData.title,
            request: ticketData.text,
            id: Math.random().toString(),
            status: 'open',
        }
        this.tickets.push(ticket);
    }

    onCloseTicket(id:string){
        this.tickets = this.tickets.map((ticket)=>{
            if(ticket.id===id){
                return {...ticket, status:'closed' }
            }
            return ticket;
        })
    }
}
