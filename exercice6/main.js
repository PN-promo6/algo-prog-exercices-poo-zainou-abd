class Main {
    public static void main(String[ ] args) {
        Client firstName = new Client ("AB",126984);
        ClientPro secondName = new ClientPro ("CD", 489621, 4726);
        System.out.println(firstName.name + " " + firstName.accountNumber);
        System.out.println(secondName.name + " " + secondName.accountNumber + " " + secondName.siret);
    }
}

class Client {
    String name;
    int accountNumber;

    Client(String name, int accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    int siret;

    ClientPro(String name, int accountNumber, int siret) {
        super(name, accountNumber);
        this.siret = siret;
    }
}
