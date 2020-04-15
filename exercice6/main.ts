class Client {
  accountNumber: string;
  name: string;

  constructor(accountNumber:string ,name:string) {
    this.accountNumber = accountNumber;
    this.name = name;
  }

}

class ProfessionalClient extends Client {
  siret:number;

  constructor(accountNumber: string, name: string, siret: number){
    super(accountNumber, name)
    this.siret = siret;
  }

}

let newClient: Client = new Client("260487", "Pierre")

console.log(newClient.accountNumber, newClient.name);

let newProClient: ProfessionalClient = new ProfessionalClient("971626", "George", 123456);

console.log(newProClient.accountNumber, newProClient.name, newProClient.siret.toString());
