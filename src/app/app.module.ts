import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { TableCompComponent } from './table-comp/table-comp.component';

// Main.ts'in burayı tetiklemesinin ardından,
// App.module.ts dosyamın içerisinde de componentlerimi declare ediyorum.
// Component kavramını açıklayacak olursak:
// Projenin bölümlere ayrılmış hali diyebiliriz (navbar, footer, content vb).
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableCompComponent,
  ],

  // ng model ile çalışabilmek için FormsModule eklemesini yaptım
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
