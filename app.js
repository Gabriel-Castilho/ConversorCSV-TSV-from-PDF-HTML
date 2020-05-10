const Reader = require('./Reader');
const Writer = require('./Writer')
const Processor = require('./Processor')
const Table = require('./Table')
const reader = new Reader();
const HtmlParser=require('./HtmlParser')
const PdfWriter =require('./PdfWriter')
const writer = new Writer();

async function main(){
    var data = await reader.Read('./users.csv')
    var processedData = Processor.Process(data)
    var users = new Table(processedData)
    
   var html =await HtmlParser.Parse(users);
   writer.Write(Date.now() + '.html',html)
   PdfWriter.WritePdf(Date.now() + '.pdf',html)
}

main();