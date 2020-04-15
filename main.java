class Main{
  public static void main(String[] args) {
    ConcertTicket firstConcert = new ConcertTicket ("AB","222", "09 avril", "Marseille","Client");
    ConcertTicket secondConcert = new ConcertTicket ("BC", "320","13 avril","Marseille","Client");
    System.out.println(firstConcert.concertDetails());
  }
}

class ConcertTicket {
  public String artistName;
  public String placeNumber;
  public String date;
  public String city;
  public String clientName;


public ConcertTicket (String artistName, String placeNumber,String date,String city, String clientName ){
  this.artistName = artistName;
  this.placeNumber = placeNumber;
  this.date = date;
  this.city = city;
  this.clientName = clientName;
}

public String concertDetails(){
      String concertVar = "<p>Nom de l'artiste: "+ this.artistName + "</p> <p>Numéro de la place:"+ this.placeNumber + "</p> <p>Date du concert: " + this.date + "</p> <p>Ville: "+ this.city + "</p>";

     if(this.clientName ==""){

      concertVar = concertVar + "<p> Acheté par :" + this.clientName + "</p>" ;
     }
     return concertVar;
 }
}
