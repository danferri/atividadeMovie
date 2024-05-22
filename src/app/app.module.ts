import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importação do HttpClientModule

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component'; // Importação do MovieComponent



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent // Declaração do MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adição do HttpClientModule à lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
