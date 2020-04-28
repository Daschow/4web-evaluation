const hasMaj = word => word.match(/[A-Z]/);
const hasMin = word => word.match(/[a-z]/);
const hasAlpha = word => word.match(/\W/);
const hasNumber = word => word.match(/\d/);
const isMoreThan8 = word => word.length > 8;
const passwordStrength = word =>
  Object.values({
    hasMaj: hasMaj(word),
    hasMin: hasMin(word),
    hasAlpha: hasAlpha(word),
    hasNumber: hasNumber(word),
    isMoreThan8: isMoreThan8(word)
  }).filter(Boolean).length;

const returnPasswordStrenght = password => {
  let passwordStength = 0;
  if (password.length > 8) {
    passwordStength = +1;
  }
  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]", "[A-Z]", "[0-9]", "[a-z]");
  for (var i = 0; i < matchedCase.length; i++) {
    if (new RegExp(matchedCase[i]).test(password)) passwordStength++;
  }

  return passwordStength;
};

export default passwordStrength;
