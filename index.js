'use strict';
const toWord = function(num, level) {
  if (num === null) {
    return "";
  }

  if (num < 0) {
    num = num * -1;
    return "منفی " + toWord(num, level);
  }
  if (num === 0) {
    if (level === 0) {
      return "صفر";
    } else {
      return "";
    }
  }
  let result = "",
    yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "],
    dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "],
    sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "],
    dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
  if (level > 0) {
    result += " و ";
    level -= 1;
  }

  if (num < 10) {
    result += yekan[num - 1];
  } else if (num < 20) {
    result += dah[num - 10];
  } else if (num < 100) {
    result += dahgan[parseInt(num / 10, 10) - 2] + toWord(num % 10, level + 1);
  } else if (num < 1000) {
    result += sadgan[parseInt(num / 100, 10) - 1] + toWord(num % 100, level + 1);
  } else if (num < 1000000) {
    result += toWord(parseInt(num / 1000, 10), level) + " هزار " + toWord(num % 1000, level + 1);
  } else if (num < 1000000000) {
    result += toWord(parseInt(num / 1000000, 10), level) + " میلیون " + toWord(num % 1000000, level + 1);
  } else if (num < 1000000000000) {
    result += toWord(parseInt(num / 1000000000, 10), level) + " میلیارد " + toWord(num % 1000000000, level + 1);
  } else if (num < 1000000000000000) {
    result += toWord(parseInt(num / 1000000000000, 10), level) + " تریلیارد " + toWord(num % 1000000000000, level + 1);
  }
  return result;

};

const toWordRials = function(num) {
  return toWord(num, 0) + " ریال";
};

const toWordTomans = function(num) {
  if (num >= 10) {
    num = parseInt(num / 10, 10);
  } else if (num <= -10) {
    num = parseInt(num / 10, 10);
  } else {
    num = 0;
  }

  return toWord(num, 0) + " تومان";
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports.toWord = toWord;
  module.exports.toWordRials = toWordRials;
  module.exports.toWordTomans = toWordTomans;
}
