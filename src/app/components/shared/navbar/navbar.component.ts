import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeComponent } from '../../heroe/heroe.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

//heroes:any[]=[];
export class NavbarComponent {
  busqueda: string='';

  constructor(public heroes: HeroesService,) { }


  obtenerNombre(){
    console.log('Hola',this.busqueda);
    this.heroes.filtro = this.busqueda;
  }
}
