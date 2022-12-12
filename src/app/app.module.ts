import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { FiltroPipe } from '@shared/components/pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    //FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
