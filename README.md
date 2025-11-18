# Patterns S.O.L.I.D

1 . Single Responsibility Principle (Princípio de Responsabilidade Única): Cada classe deve ter apenas um motivo para mudar.

A ideia é que uma classe (ou módulo) tenha apenas uma responsabilidade — e, portanto, apenas uma razão para mudar.

Exemplo que viola SRP (má prática): um objeto que mistura dados com persistência e envio de e-mail.

```javascript
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
```

Refatorando para respeitar SRP: separar responsabilidades em classes/serviços distintos.

```javascript
// Modelo de dados (apenas dados)
class Person {
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
```

Benefícios desta refatoração:
- Cada classe tem uma única responsabilidade (modelo, persistência ou notificação).
- Facilita testes unitários: você pode mockar `DatabaseService` e `EmailService` separadamente.
- Menos acoplamento: mudanças na forma de enviar e-mails não exigem alterações na classe `Person`.

----

Interface Segregation Principle (ISP)

O **Interface Segregation Principle (ISP)** diz que:

> *Nenhum cliente deve ser forçado a depender de métodos que não usa.*

Na prática: é melhor ter **interfaces pequenas e específicas** do que uma interface "gorda" que obriga classes a implementarem (ou conhecerem) métodos que não fazem sentido para elas.

---

## Arquivo de exemplo

- `isp.js` – demonstra o ISP com um cenário de impressoras, scanners e fax:
  - `IPrinter`, `IScanner`, `IFax`: "interfaces" pequenas e focadas.
  - `SimplePrinter`: só sabe **imprimir**.
  - `SimpleScanner`: só sabe **escanear**.
  - `SimpleFax`: só sabe **enviar fax**.
  - `MultiFunctionPrinter`: combina impressão, scanner e fax.

Cada classe depende apenas da interface que realmente precisa, evitando métodos inúteis.

---

## Como executar o exemplo

No diretório raiz do projeto:

```bash
cd solid
node isp.js
```

Você verá uma saída semelhante a:

```text
--- SimplePrinter ---
[SimplePrinter] Imprimindo: Contrato 123

--- SimpleScanner ---
[SimpleScanner] Escaneando: Contrato 123

--- MultiFunctionPrinter ---
[MFP] Imprimindo: Contrato 123
[SimpleScanner] Escaneando: Contrato 123
[SimpleFax] Enviando fax: Contrato 123
```

Assim fica claro como o ISP ajuda a manter cada classe enxuta, usando apenas os métodos que realmente importam para ela.
