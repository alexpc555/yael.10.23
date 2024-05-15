import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{

  public lista_codigos: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerCodigos();
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  public obtenerCodigos(){
    this.lista_codigos = [
      {
        "accion": "codigo-redimido",
        "puntos": 1000,
      },
      {
        "accion": "Jugar sin chocar de 0 a 30 segundos",
        "puntos": 100,
      },
      {
        "accion": "Jugar sin chocar de 31 a 60 segundos",
        "puntos": 200,
      },
      {
        "accion": "Jugar sin chocar de 61 a 90 segundos",
        "puntos": 300,
      },
      {
        "accion": "Jugar sin chocar de 91 a 120 segundos",
        "puntos": 400,
      }
    ];
  }

  public jugarAhora(){
    this.router.navigate(["juego"])
  }
}
