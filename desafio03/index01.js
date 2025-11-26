class Report {
    constructor() {
      this.data = [];
    }
  
    addEntry(entry) {
      this.data.push(entry);
    }
  
    getData() {
      return this.data;
    }
  }
  
  class ReportPrinter {
    printConsole(report) {
      console.log("--- Relatório ---");
      report.getData().forEach((entry, index) => {
        console.log(`${index + 1}: ${entry}`);
      });
      console.log("-----------------");
    }
  
    printJSON(report) {
      console.log(JSON.stringify(report.getData(), null, 2));
    }
  }
  
  const myReport = new Report();
  myReport.addEntry("Implementar SRP");
  myReport.addEntry("Refatorar código legado");
  myReport.addEntry("Aprender Design Patterns");
  
  const printer = new ReportPrinter();
  
  console.log(">> Saída em Texto:");
  printer.printConsole(myReport);
  
  console.log("\n>> Saída em JSON:");
  printer.printJSON(myReport);