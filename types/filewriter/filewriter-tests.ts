

// http://www.w3.org/TR/file-writer-api/
function writeFile(writer:FileWriter): void{
  function done(evt:Event): void{
    alert("Write completed.");
  }
  function error(evt:Event): void{
    alert("Write failed:" + evt);
  }

  var b:Blob = new Blob();
  writer.onwrite = done;
  writer.onerror = error;
  writer.write(b);
}