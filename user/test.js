//-----------------------------------------------PROBLEM-1------------------------------


//normal case
interestedPlayers(users1); // Expected: ["John", "Ron"]

// No arguments
 interestedPlayers(); // Expected: "Invalid argument"

// Empty object
interestedPlayers({}); // Expected: []

//non object
interestedPlayers(null); // Expected: "Invalid argument"




//---------------------------------------PROBLEM-2------------------------------------


//normal case
nationality(users1); // Expected: "Wanda" "Pike"

//  No arguments
nationality(); // Expected: "Invalid argument"

//  Empty object
nationality({}); // Expected: No output



//  Non-object argument
nationality("string"); // Expected: "Invalid argument"

//non object
nationality(null); // Expected: "Invalid argument"
nationality([]); // Expected: "Invalid argument"







//------------------------------------------------PROBLEM-3--------------------------------------------------

//normal case
mastersDegree(users1); // Expected: "John" "Rob"

// No arguments
mastersDegree(); // Expected: "Invalid argument"

//Empty object
mastersDegree({}); // Expected: No output

// Non-object argument
mastersDegree("string"); // Expected: "Invalid argument"
mastersDegree(null); // Expected: "Invalid argument"

//non object
mastersDegree([]); // Expected: "Invalid argument"









//---------------------------------------------------------PROBLEM-4--------------------------------------------------------------------


//normal case
groupOfUsers(users1); // Expected output:{ Python: ["Pike"], Javascript: ["Wanda", "Rob"],  Golang: ["John", "Ron"], Others: []}

//  No arguments
groupOfUsers(); // Expected: "Invalid argument"

// Empty object
groupOfUsers({}); // Expected: { Python: [], Javascript: [], Golang: [], Others: [] }


//  Non-object argument
groupOfUsers("string"); // Expected: "Invalid argument"

//non object
groupOfUsers(null); // Expected: "Invalid argument"

groupOfUsers([]); // Expected: "Invalid argument"