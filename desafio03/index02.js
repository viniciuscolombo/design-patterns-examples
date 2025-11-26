class Printer {
    printDocument(doc) {
      console.log(`Imprimindo documento: ${doc}`);
    }
  }
  
  class Scanner {
    scanDocument(doc) {
      console.log(`Digitalizando documento: ${doc}`);
    }
  }
  
  class ModernMachine {
    constructor() {
      this.printer = new Printer();
      this.scanner = new Scanner();
    }
  
    print(doc) {
      this.printer.printDocument(doc);
    }
  
    scan(doc) {
      this.scanner.scanDocument(doc);
    }
  }
  
  class OldFashionedPrinter {
    constructor() {
      this.printer = new Printer();
    }
  
    print(doc) {
      this.printer.printDocument(doc);
    }
  }
  
  console.log(">> Máquina Moderna:");
  const multi = new ModernMachine();
  multi.print("TCC.pdf");
  multi.scan("Identidade.png");
  
  console.log("\n>> Impressora Antiga:");
  const old = new OldFashionedPrinter();
  old.print("Receita.txt");