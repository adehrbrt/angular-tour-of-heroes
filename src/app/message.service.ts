import { Injectable } from '@angular/core';

/**
 * @Injectable denotes a decorator that participates in the dependency injection system
 * with the service output being accessible in other components (as required).
 */
@Injectable({
  providedIn: 'root',
})

export class MessageService {
  messages: string[] = []; // messages data type of a string array (string[]), intially declared as empty (= [])

  /**
   * Add a new message to the messages array via a message property with a string data type
   * @param message 
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * Clear the messages array and reset to initial empty state
   */
  clear() {
    this.messages = [];
  }
}
