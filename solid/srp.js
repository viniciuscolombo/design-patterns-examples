// Exemplo ruim: Person tem 3 responsabilidades ao mesmo tempo (modelo, persistência e notificação)
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    console.log(`Salvando ${this.name} no banco de dados...`);
    // Lógica para salvar no banco de dados
  }

  sendWelcomeEmail() {
    console.log(`Enviando e-mail de boas-vindas para ${this.email}...`);
    // Lógica para enviar e-mail
  }
}

const p = new Person('Ana', 'ana@exemplo.com');
p.saveToDatabase();
p.sendWelcomeEmail();


class PersonSrp {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Serviço responsável apenas por persistência
class DatabaseService {
  save(person) {
    // Aqui seria a chamada ao banco (ex: ORM / query)
    console.log(`(DB) Salvando ${person.name} no banco de dados...`);
  }
}

// Serviço responsável apenas por entrega de e-mails
class EmailService {
  sendWelcome(person) {
    // Aqui seria a integração com SMTP / API de e-mail
    console.log(`(Email) Enviando e-mail de boas-vindas para ${person.email}...`);
  }
}

// Uso: cada parte faz UMA coisa — fácil de testar e manter
const person = new Person('Ana', 'ana@exemplo.com');
const db = new DatabaseService();
const mail = new EmailService();

db.save(person);
mail.sendWelcome(person);