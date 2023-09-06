function capitalize(string) {
  if (typeof string === 'string') {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
  } else {
    throw new Error('Input must be a string');
  }
}
module.exports = capitalize;
