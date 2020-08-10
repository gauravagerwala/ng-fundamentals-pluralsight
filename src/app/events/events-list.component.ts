import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="well">
        <div>Testing Scope for styles</div>
    </div>

    <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)"
    [event]="event1"></event-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFooUsingTemplateVar()">Log FOO from child using template variables</button>
    </div>
    `,
    styles:[`
    .well div { color: black; }
    `]
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: 59.9,
        imageUrl: '/assets/images/angular-shield.png',
        location: {
            address: '2323 Check St',
            city: 'London',
            country: 'England'
        }
    }
    handleEventClicked(data){
        console.log(data)
    }
}