import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-juego-dos-screen',
  templateUrl: './juego-dos-screen.component.html',
  styleUrls: ['./juego-dos-screen.component.scss']
})
export class JuegoDosScreenComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public goJuegoTerminado(){
    this.router.navigate(["juego-terminado"]);
  }

}
