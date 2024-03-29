import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
standalone: true
})
export class AppComponent {
title = 'This is interpolated';
clientName = 'Aldrei';
appliedCSS = 'green';
notAppliedCSS = false;
myColor = 'green';

clickCount=0
clickMe() {
this.clickCount++;
}

//event binding
showData($event: any) {
console.log('Button is clicked!');
if($event) {
console.log($event.target);
console.log($event.target.value);
}
}
}