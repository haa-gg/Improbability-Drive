function randomMagic() {

  //Make a call to the mighty Google Sheets API and pray for a response
  /*The way this call works is really cool! You can check out the details of what each bit of the URL-thing below is doing at: https://developers.google.com/sheets/api/guides/concepts */
  //If you're expecting lots of calls, it might be better to swap from Sheets API to a git-hosted JSON file
  var json = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1jZmvp6Dx-DLDv03pRMgKGixmWEsqEBJD1HSP5uAF38Y/values/'Sheet1'/?key=AIzaSyA1T4CcA8nnxMfxShN7Blrinr9y7LL5CzY", function(json) {

    var magicalArrayLength = json.values.length;

    var variableDice = Math.floor(Math.random()*magicalArrayLength);
//console.log(variableDice);
//console.log(json.values[variableDice][0]);
$(".effect").text(json.values[variableDice][0]);
})
}
 $( "#randomizer" ).click(function() {
 randomMagic();
   });
