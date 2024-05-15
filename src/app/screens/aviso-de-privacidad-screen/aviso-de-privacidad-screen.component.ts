import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-de-privacidad-screen',
  templateUrl: './aviso-de-privacidad-screen.component.html',
  styleUrls: ['./aviso-de-privacidad-screen.component.scss']
})
export class AvisoDePrivacidadScreenComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
