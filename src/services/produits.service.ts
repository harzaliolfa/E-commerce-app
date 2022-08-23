import { Subject } from "rxjs/Subject";
import { produits } from "../models/produits";
import * as firebase from 'firebase';
 
import Datasnapshot = firebase.database.DataSnapshot;

export class ProduitsService {

    produits$ = new Subject<produits[]>();


    produitsList = [

        {
            name: 'Télévision',
            description: [
            'Dimensions: 40 pouces',
            'Consommation: 22 kWh/an'
            ],
            isInStock : true,
            startTime: '',
            endTime: '',
            image:'../assets/imgs/tele.jpg'
        
            },

    {
    name: 'Machine à laver',
    description: [
    'Volume: 6 litres',
    'Temps de lavage: 2 heures',
    'Consommation: 173 kWh/an'
    ],
    isInStock : true,
    startTime: '',
     endTime: '',
     image:'../assets/imgs/machine.png'



    },
   
    {
    name: 'Ordinateur',
    description: [
    'Marque: fait maison',
    'Consommation: 500 kWh/an'
    ],
    isInStock : true,
    startTime: '',
    endTime: '',
    image:'../assets/imgs/ordinateur.jpg'


    }
    ];

    emitProduits() {
        //this.produits$.next(this.produitsList.slice());
        }
        saveData() {
            return new Promise((resolve, reject) => {
            firebase.database().ref('produits').set(this.produitsList).then(
            (data: Datasnapshot) => {
            resolve(data);
            },
            (error) => {
            reject(error);
            }
            );
            });
            }
            retrieveData() {
            return new Promise((resolve, reject) => {
            firebase.database().ref('produits').once('value').then(
            (data: Datasnapshot) => {
            this.produitsList = data.val();
            this.emitProduits();
            resolve('Données récupérées avec succès !');
            }, (error) => {
            reject(error);
            }
            );
            });
            }
    addProduits(produits: produits) {
        this.produitsList.push(produits);
        this.emitProduits();
                }
    }