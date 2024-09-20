

// Q1 who are interested in playing video games

const interestedPlayers = (users) => {
  if (validArgument(users)) {
    let keys = Object.keys(users);
    let reg = /video games/gi;
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let interested = [];
      if (users[key].hasOwnProperty("interests") == true)
        if (reg.test(users[key]["interests"])?.[0]) interested.push(key);
      return interested;
    }
  }
};

// Q2 Find all users staying in Germany.


const nationality = (users) => {
  if (validArgument(users)) {
    let keys = Object.keys(users);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let userObj = users[key];
      if (userObj.nationality == "Germany") {
        console.log(key);
      }
    }
  } else console.log("Invalid arguement");
};

// Q3 Find all users with masters Degree.


const mastersDegree = (users) => {
  if (validArgument(users)) {
    let keys = Object.keys(users);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let userObj = users[key];
      if (userObj.qualification == "Masters") {
        console.log(key);
      }
    }
  } else console.log("Invalid arguement");
};

//Q4 Group users based on their Programming language mentioned in their designation.



const groupOfUsers = (users) => {
  if (validArgument(users)) {
    let keys = Object.keys(users);
    let regPython = /python/i;
    let regGolang = /golang/i;
    let regJavascript = /javascript/i;
    let group = { Python: [], Javascript: [], Golang: [], Others: [] };
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let userObj = users[key];
      if (regPython.test(userObj.desgination)) {
        group["Python"].push(key);
      } else if (regGolang.test(userObj.desgination)) group["Golang"].push(key);
      else if (regJavascript.test(userObj.desgination))
        group["Javascript"].push(key);
    }
    console.log(group);
  } else console.log("Invalid arguement");
};

export { interestedPlayers, nationality, mastersDegree, groupOfUsers };