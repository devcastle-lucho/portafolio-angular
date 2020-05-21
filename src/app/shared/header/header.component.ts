import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  constructor(public infoPaginaService: InfoPaginaService,
              private router: Router) { }

  ngOnInit(): void {
    this.titulo = this.infoPaginaService.info.titulo;
  }

  buscarProducto(termino: string) {
    if(termino.length < 1){ return; }

    this.router.navigate(['/search', termino]);
  }
}
