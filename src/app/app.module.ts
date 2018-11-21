import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Customer/Customer.Component';
//import { CustomerCostPipe } from './Customer/Customer.cost';

@NgModule({
  declarations: [
    AppComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,CustomerComponent]
})
export class AppModule { }
