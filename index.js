//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;const nextISSTimesForMyLocation = function(callback) {
  // empty for now
}
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('142.59.172.213', (error,coordinates) => {
  
   
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned IP:' , coordinates);
});
*/
/*const coords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(coords, (error,passTimes) => {
  
   
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned flyover times:' , passTimes);
});
*/

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});