// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.
class ConcertTicket {
  public artistName: string;
  public placeNumber: number;
  public date: string;
  public place: string;
  public typePlace: any = "";


  constructor(artistName: string, placeNumber: number, date: string, place: string, typePlace?: any) {
    this.artistName = artistName;
    this.placeNumber = placeNumber;
    this.date = date;
    this.place = place;
    this.typePlace = typePlace;
  }

  /**
   * htmlDetails
   */
  public htmlDetails(): string {
    let htmlContent: string = `
    <p>Nom de l'artiste : ${this.artistName}</p>;
    <p>Numéro de la place : ${this.placeNumber}</p>;
    <p>Date : ${this.date}</p>;
    <p>Lieu du concert : ${this.place}</p>
    <p>Place assise ou debout : ${this.typePlace}</p>`;
    if (this.typePlace) {
      htmlContent = htmlContent + `<p>Place assise</p>`
    }
    return htmlContent;
  }
}

let ticket01 : ConcertTicket = new ConcertTicket( "AB", 215, "9 avril", "Marseille", " ");
let ticket02: ConcertTicket = new ConcertTicket("CD", 272, "15 mai", " Paris")
console.log(ticket01.htmlDetails());
console.log(ticket02.htmlDetails());
