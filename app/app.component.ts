import { Component } from '@angular/core';
import { Boton } from './btn';

@Component({
  selector: 'my-app',
  template: `
  	<header>

  	</header>
  	<div>
  		<button *ngFor="let values of btn">{{values.name}}</button>
      <p *ngIf="btn.length > 3">There're many buttons...</p>
      <button id="redBtn" (click)="onClickMe()">Don't press the button</button>
      <label>{{clickMessage}}</label><br>
      <input #data (keyup)="0">
      <label>Current Text: <label>{{data.value}}</label></label><br>
      <input #enterData (keyup.enter)="values = enterData.value" (blur) = "values = enterData.value">
      <label>Press enter to insert text: <label>{{values}}</label></label>
  	</div>
  `,
  styles: [`
  	header{
  		width: 100%;
  		height: 70px;
  		background-color: rgb(0, 134, 179);
  		position: fixed;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);  		
  	}
  	button{
  		 margin: 80px 10px 10px 10px;
  		 width: 180px;
  		 height: 50px;
  		 position: static;
  		 border-radius: 6px;
  		 border: none;
  		 font-family: Arial;
  		 font-size: 17px;
  		 color: white;
       pointer: cusor;
  	}
  	button:hover{
  		background-color: rgba(153, 0, 0, 1);
  	}
  	button:active{
  		background-color: rgb(255, 0, 0);
  	}
    #redBtn{
      background-color: red;
      margin: 10px;
    }
    #redBtn:active{
      background-color: rgb(153, 0, 0);
    }
  `]
})
export class AppComponent {
	
  clickMessage = '';
  times = 0;
  values = '';

  onClickMe(){

    this.clickMessage = 'Oh you´re bad, I like it!';
    if(this.times > 0){
      switch(this.times){
        case 10:
          this.clickMessage = 'Stop it Damn it  >:v';
          this.times = -1;
        break;
        default:
          this.clickMessage = 'You pressed again '+this.times;+'!'
        break;
      }
    }
    this.times++;
  }  

  btn = [
    new Boton( 1,'Botón 1'),
    new Boton( 2,'Botón 2'),
    new Boton( 3,'Botón 3'),
    new Boton( 4,'Botón 4')
  ];

}
