import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoEquipo: InfoPaginaService) { }

  ngOnInit() {
  }

}
