
// list of 10 districts used in the district Visualization
var districts_axis = "Tenderloin,Mission,Financial District/South Beach,South of Market,Bayview Hunters Point,Null,North Beach,Sunset/Parkside,Nob Hill,Castro/UpperMarket".split(",");

//list of police districts used in the district visualization
var police_distrcts_axis = "Bayview,Central,Ingleside,Mission,Northern,Out of SF,Park,Richmond,Southern,Taraval,Tenderloin".split(",")

//list of 10 incidents used in incidents visualization
var incidents_axis = "Larceny - From Vehicle,Other,Larceny Theft - Other,Vandalism,Simple Assault,Lost Property,Motor Vehicle Theft,Non-Criminal,Fraud,Recovered Vehicle".split(",")


/*
 * counts all of the letters in the input text and stores the counts as
 * a d3 map object
 * https://github.com/d3/d3-collection/blob/master/README.md#map
 */

/*
var countLetters = function(input) {
  let text = onlyLetters(input);
  let count = d3.map();


  // * you can loop through strings as if they are arrays
  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

  for (let i = 0; i < text.length; i++) {
    var letter = text[i];

    // check if we have seen this letter before
    if (count.has(letter)) {
      count.set(letter, count.get(letter) + 1);
    }
    else {
      count.set(letter, 1);
    }
  }

  return count;
};

*/

// in console try: countLetters("Hello World!");
// in console try: countLetters("Hello World!").keys();
// in console try: countLetters("Hello World!").entries();
