import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { DataAccessService } from './services';
import { TOKENS_PROVIDERS } from './tokens/countries.tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ...TOKENS_PROVIDERS,
    DataAccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
