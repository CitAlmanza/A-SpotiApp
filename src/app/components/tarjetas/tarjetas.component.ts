import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  verArtista(item: any) {
    let artisId = '';
    if (item.type === 'artist') {
      artisId = item.id;
    } else {
      artisId = item.artists[0].id;
    }
   // console.log(artisId);
    this.router.navigate(['/artist', artisId]);
  }

}
