// Interface Segregation Principle (ISP)
// Cada classe deve depender apenas dos métodos que realmente usa.

// Interfaces pequenas e específicas (simuladas com classes base em JS)
class IPrinter {
  print(document) {
    throw new Error('Not implemented');
  }
}

class IScanner {
  scan(document) {
    throw new Error('Not implemented');
  }
}

class IFax {
  fax(document) {
    throw new Error('Not implemented');
  }
}

// Cliente que só precisa imprimir não deveria ser forçado a conhecer scan/fax
class SimplePrinter extends IPrinter {
  print(document) {
    console.log('[SimplePrinter] Imprimindo:', document);
  }
}

// Cliente que só precisa escanear não deveria depender de métodos de impressão
class SimpleScanner extends IScanner {
  scan(document) {
    console.log('[SimpleScanner] Escaneando:', document);
  }
}

// Dispositivo multifunção pode implementar várias capacidades
class MultiFunctionPrinter extends IPrinter {
  constructor(scanner, fax) {
    super();
    this.scanner = scanner;
    this.faxDevice = fax;
  }

  print(document) {
    console.log('[MFP] Imprimindo:', document);
  }

  scan(document) {
    this.scanner.scan(document);
  }

  fax(document) {
    this.faxDevice.fax(document);
  }
}

class SimpleFax extends IFax {
  fax(document) {
    console.log('[SimpleFax] Enviando fax:', document);
  }
}

// Pequeno "main" para demonstrar o princípio em ação
function main() {
  const doc = 'Contrato 123';

  const printer = new SimplePrinter();
  const scanner = new SimpleScanner();
  const fax = new SimpleFax();
  const mfp = new MultiFunctionPrinter(scanner, fax);

  console.log('--- SimplePrinter ---');
  printer.print(doc);

  console.log('\n--- SimpleScanner ---');
  scanner.scan(doc);

  console.log('\n--- MultiFunctionPrinter ---');
  mfp.print(doc);
  mfp.scan(doc);
  mfp.fax(doc);
}

if (require.main === module) {
  main();
}

module.exports = {
  IPrinter,
  IScanner,
  IFax,
  SimplePrinter,
  SimpleScanner,
  SimpleFax,
  MultiFunctionPrinter,
};
