import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    console.log('contacts:', this.contacts);
    // add contact to contacts list
    // clear inputs
  }
}
// <div>
//   <label for="contact-name"></label>
//   <input type="text" [(ngModel)]="newContact.name">
// </div>
// <div>
//   <label for="contact-email"></label>
//   <input type="text" [(ngModel)]="newContact.email">
// </div>
// <div>
//   <label for="contact-phone"></label>
//   <input type="text" [(ngModel)]="newContact.phoneNumber">
// </div>
// <div>
//   <label for="contact-image"></label>
//   <input type="text" [(ngModel)]="newContact.image">
// </div>
