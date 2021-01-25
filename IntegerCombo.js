/**
 * The following is the function where the solution shall be written
 */

function solution(input) {

  // logic here

  //Removes all non integer characters
  stringtoNum = input.replace(/[^\d]/g, '');
  
  //Checks to see if an integer was provided
  if(parseInt(stringtoNum)) {
  //If integer is provided then run this code....
  //Declaring array where string combinations will be sent
  var comboArray = [];

  //combinations loop that pushes to comboArray
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      for (var z = 0; z < 3; z++) {
        if (x != y && y != z && z != x) {
          comboArray.push(stringtoNum[x] + "" + stringtoNum[y] + "" + stringtoNum[z]);
        }
      }
    }
  }

  //sort array
  comboArray.sort(function (a, b) {
    return b - a;
  });

  //Convert array to String
  var output = comboArray.toString();

  //Return output
  return "Output = " + output;
  }
  //If an integer wasn't provided then return an error
  else {
    return "Exception Error: No integers provided"
   }
}

// some example inputs
console.log(solution('ABC'));
console.log(solution('3264')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236