//-------------------------------------------------PROBLEM-1-----------------------------------------
for(let i = 0; i<arrayOfObjects.length; i++){
    emailAddressOfAll(arrayOfObjects[i]);
    emailAddressOfAll(undefined);
    emailAddressOfAll(null);
    emailAddressOfAll({});
}

// -----------------------------------------------------------PROBLEM -2-----------------------------------------

for(let i = 0; i<arrayOfObjects.length; i++){
    hobbyInAge(arrayOfObjects[i], arrayOfObjects[i].age);
    hobbyInAge(undefined, 0);
    hobbyInAge(null, null);
    hobbyInAge({}, 0);
}

//-------------------------------------------------------------------------PROBLEM-3----------------------------------
for(let i = 0; i<arrayOfObjects.length; i++){
    displayNamesOfStudent(arrayOfObjects[i]);
    displayNamesOfStudent({})
    displayNamesOfStudent(null)
    displayNamesOfStudent(undefined)
}

//----------------------------------------------------PROBLEM-4--------------------------------------------

nameAndCity(arrayOfObjects)
nameAndCity([]);
nameAndCity(null)
nameAndCity(undefined)


// --------------------------------------------------  PROBLEM-5-----------------------------------------

ageOfAll(arrayOfObjects)
ageOfAll([])
ageOfAll(null)
ageOfAll(undefined)


// -----------------------------------------------------PROBLEM-6---------------------------------------------

firstHobby(arrayOfObjects)
firstHobby([])
firstHobby(undefined)
firstHobby(null)

//-------------------------------------------------------PROBLEM-5----------------------------------


for(let i =0; i<arrayOfObjects.length; i++){
    userInfo(arrayOfObjects[i]);
    userInfo({})
    userInfo(null)
    userInfo(undefined)
}



//--------------------------PROBLEM-6-------------------------------------------------------


for(let i =0; i<arrayOfObjects.length; i++){
    cityAndCountry(arrayOfObjects[i]);
    cityAndCountry({})
    cityAndCountry(null)
    cityAndCountry(undefined)
}