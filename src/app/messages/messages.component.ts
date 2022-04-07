import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } // Constructor with MessageService.

  ngOnInit(): void { }
}
