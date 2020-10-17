import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  lodingArtist: boolean;
  topTracks: any = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.lodingArtist = true;
    this.router.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }


  getArtista(id: string) {
    this.lodingArtist = true;
    this.spotify.getArtista(id)
    .subscribe(artista => {
        this.artista = artista;
        this.lodingArtist = false;
      }
    );
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });

  }

}
