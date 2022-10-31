import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
checkValue: any;
name: any;

  method(){    
    this.name= this.checkValue;
  }
}
