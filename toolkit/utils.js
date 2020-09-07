function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
function capitalize(string, delimiter) {
  // takes a string of words or a word and capilizes the first letter
  // splits based off of delimiter
  let result = "";
  string
    .split(delimiter)
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .forEach((el) => {
      if (result.length === 0) {
        result += el;
      } else {
        result += ` ${el}`;
      }
    });

  return result;
}
module.exports = {
  capitalizeFirstLetter,
  capitalize,
};
