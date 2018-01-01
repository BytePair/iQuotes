import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";


/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add to favorite quotes?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
            console.log('clicked ok')
          }
        }
      ]
    });

    alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

}
