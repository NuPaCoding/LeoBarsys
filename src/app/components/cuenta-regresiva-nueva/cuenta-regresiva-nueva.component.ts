import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-regresiva-nueva',
  templateUrl: './cuenta-regresiva-nueva.component.html',
  styleUrls: ['./cuenta-regresiva-nueva.component.css']
})
export class CuentaRegresivaNuevaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countDownDate = new Date("june 23, 2023 00:00:00").getTime();
    demo:any;
    dias:any;
    horas:any;
    minutos:any;
    segundos:any;
    x = setInterval(() => {
      var now = new Date().getTime();
      var distance = this.countDownDate - now;
      var days = Math.floor(distance /(1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / (1000));
      this.demo = days + " días, " + hours + " horas, " +  minutes + " minutos, " + seconds + " segundos";
      if (distance < 0){
        clearInterval(this.x);
        this.demo = "¡Empezamos la fiesta!"
      }
      this.dias = days;
      this.horas = hours;
      this.minutos = minutes;
      this.segundos = seconds;  
    })

}
