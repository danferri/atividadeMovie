import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments.js';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&language=en-US&page=1`;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

