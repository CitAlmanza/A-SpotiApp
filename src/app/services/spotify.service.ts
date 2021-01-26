import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQD40ndzOevp8tswko11FdTwpaLI13QrgWNKk8n4bE1O59O8r9qiQCfsbPhXLfeeRKf0bCRRr7Odq1K9Isw'
    });

    return this.http.get(url, {headers});
  }

  getReleasses() {
    return this.getQuery('browse/new-releases')
    .pipe( map( (data: any) =>  data.albums.items) );
  }

  // https://api.spotify.com/v1/search?query=ed+sheeran&type=artist&offset=0&limit=20
  getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
              .pipe ( map( (data: any) => data.artists.items ) );
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
              // .pipe ( map( (data: any) => data.artists.items ) );
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
              .pipe ( map( (data: any) => data.tracks) );
  }
}
