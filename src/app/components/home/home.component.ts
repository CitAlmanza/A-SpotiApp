import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getReleasses()
    .subscribe( (data: any) => {
      // console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    },
    ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.messageError = errorServicio.error.error.message;
    });
  }



}
