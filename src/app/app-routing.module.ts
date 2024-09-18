import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListClientComponent} from "./client1/list-client/list-client.component";
import {AddClientComponent} from "./client1/add-client/add-client.component";
import {UpdateClientComponent} from "./client1/update-client/update-client.component";
import {ListAchatComponent} from "./achat1/list-achat/list-achat.component";
import {AddAchatComponent} from "./achat1/add-achat/add-achat.component";
import {ListPaiementComponent} from "./paiement1/list-paiement/list-paiement.component";
import {AddPaiementComponent} from "./paiement1/add-paiement/add-paiement.component";
import {ListProduitComponent} from "./produit1/list-produit/list-produit.component";
import {AddProduitComponent} from "./produit1/add-produit/add-produit.component";
import {UpdateProduitComponent} from "./produit1/update-produit/update-produit.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'client', component:ListClientComponent},
  {path:'addClient', component:AddClientComponent},
  {path:'updateClient', component:UpdateClientComponent},
  {path:'achat',component:ListAchatComponent},
  {path:'addAchat',component:AddAchatComponent},
  {path:'paiement',component:ListPaiementComponent},
  {path:'addPaiement',component:AddPaiementComponent},
  {path:'produit',component:ListProduitComponent},
  {path:'addProduit',component: AddProduitComponent},
  {path:'updateProduit',component: UpdateProduitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
