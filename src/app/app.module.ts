import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client1/add-client/add-client.component';
import { UpdateClientComponent } from './client1/update-client/update-client.component';
import { ListClientComponent } from './client1/list-client/list-client.component';
import { ListProduitComponent } from './produit1/list-produit/list-produit.component';
import { AddProduitComponent } from './produit1/add-produit/add-produit.component';
import { UpdateProduitComponent } from './produit1/update-produit/update-produit.component';
import { AddPaiementComponent } from './paiement1/add-paiement/add-paiement.component';
import { ListPaiementComponent } from './paiement1/list-paiement/list-paiement.component';
import { ListAchatComponent } from './achat1/list-achat/list-achat.component';
import { AddAchatComponent } from './achat1/add-achat/add-achat.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    UpdateClientComponent,
    ListClientComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    AddPaiementComponent,
    ListPaiementComponent,
    ListAchatComponent,
    AddAchatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
