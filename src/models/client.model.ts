import {Paiement} from "./paiement.model";
import {Achat} from "./achat.model";

export interface Client {
  id:        number;
  nom:       string;
  prenom:    string;
  adresse:   string;
  email:     string;
  telephone: string;
  achats:    Achat[];
  paiements: Paiement[];
}
