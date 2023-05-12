/* deepCopy makes a complete copy of an object, included nested objects. 
    We made a deep copy of the seed daa to ensure that we can't modify it for other users. 
    That way, each session gets the same starter data, not something that depends on what other users have done
*/

const deepCopy = object => {
    if (typeof object !== "object") return object;
    return JSON.parse(JSON.stringify(object));
  };
  
  module.exports = deepCopy;