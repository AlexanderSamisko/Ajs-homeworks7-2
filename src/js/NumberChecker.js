export default class NumberChecker {
  static EditPhoneNumber(str) {
    const detect = str.match(/(\+7|\+86|8)/);
    const pattern = /(\+7|\+86|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})?/g;
    if (detect[0] === '+86') {
      const correctNumber = str.replace(pattern, '+86$2$3$4$5');
      console.log(correctNumber);
    } else {
      const correctNumber = str.replace(pattern, '+7$2$3$4$5');
      console.log(correctNumber);
    }
  }
}
