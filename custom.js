// BEGIN ACTUALLY FUNCTIONAL JAVASCRIPT
//Binds our spell laid out below to the arcane phrase "randomMagic()"
function randomMagic() {

  //Conjure our arcane table of improbability from the eldrich planes of Git Hub
  var json = $.getJSON("https://raw.githubusercontent.com/haa-gg/Improbability-Drive/master/table.json", function (json) {

    //Look over our recently summoned table of magical events and bind the total number to a variable
    var magicalArrayLength = json.values.length;

    //Take the bound number representing the the total number of possible outcomes from our meddling with fate itself and pick a random possibility
    var variableDice = Math.floor(Math.random() * magicalArrayLength);

    //Make the selected outcome pop up on the screen, thus permanently altering the destiny of your party
    $(".effect").text(json.values[variableDice][0]);
  })
}

//Tells the spell to treat clicking our big friendly button the same as uttering the incantation of "randomMagic()"
$("#randomizer").click(function () {
  randomMagic();
});

// END ACTUALLY FUNCTIONAL JAVASCRIPT & BEGIN WHIMSICAL BUTTON ANIMATION WORK
document.querySelectorAll(".inner").forEach((button) => {
  button.onmousemove = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
    button.style.setProperty("--height", `${rect.height}px`);
    button.style.setProperty("--width", `${rect.width}px`);
  };
});
