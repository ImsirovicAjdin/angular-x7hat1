// An observable emitting 1-10 numbers and observer handling them

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { range } from 'rxjs/observable/range';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

  // Build an Observable using 'range'
  observable = range(1, 10);

  // Build an Observer
  observer = {
    next: (val:number) => console.log(val),
    error: (err:TypeError) => console.log(err),
    complete: () => console.log('No more data in stream')
  } 

  constructor(){
    // Subscribing the observable to get the data from the data stream
    this.observable.subscribe(this.observer);

  }
 }

// Output : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// No more data in stream

/*
An Observer is a consumer of values delivered by an Observable. 

Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: 
next, error, and complete. 

next is called whenever a new data value is emitted by an observable. 
error is called when an error has occurred. 
complete is called to let the user know that now there is no more data left to emit.
*/