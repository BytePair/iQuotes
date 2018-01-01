import { Quote } from "../data/quote.interface";


export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  public addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    // verify that quote was added successfully
    console.log('adding quote: ' + quote);
    console.log(this.favoriteQuotes);
  };

  public removeQuoteFromFavorites(quote: Quote) {
    let position = this.favoriteQuotes.findIndex((quoteElement) => {
      return quoteElement.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  public getFavoriteQuotes() {
    // return a copy using slice()
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }

}
