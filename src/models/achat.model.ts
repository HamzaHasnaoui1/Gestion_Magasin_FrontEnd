import {Paiement} from "./paiement.model";
import {Produit} from "./produit.model";

export interface Achat {
  id:           number;
  client:       string;
  produits:     Produit[];
  paiements:    Paiement[];
  montantTotal: number;
  montantPaye:  number;
  soldeRestant: number;
  dateAchat:    Date;
}
