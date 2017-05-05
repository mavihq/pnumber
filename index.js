'use strict';
const toWord = function(num, level) {
  if (num === null) {
    return "";
  }

  let _num = parseInt(toEnglishDigits(num.toString()))

  if (_num < 0) {
    _num = _num * -1;
    return "منفی " + toWord(_num, level);
  }
  if (_num === 0) {
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

  if (_num < 10) {
    result += yekan[_num - 1];
  } else if (_num < 20) {
    result += dah[_num - 10];
  } else if (_num < 100) {
    result += dahgan[parseInt(_num / 10, 10) - 2] + toWord(_num % 10, level + 1);
  } else if (_num < 1000) {
    result += sadgan[parseInt(_num / 100, 10) - 1] + toWord(_num % 100, level + 1);
  } else if (_num < 1000000) {
    result += toWord(parseInt(_num / 1000, 10), level) + " هزار " + toWord(_num % 1000, level + 1);
  } else if (_num < 1000000000) {
    result += toWord(parseInt(_num / 1000000, 10), level) + " میلیون " + toWord(_num % 1000000, level + 1);
  } else if (_num < 1000000000000) {
    result += toWord(parseInt(_num / 1000000000, 10), level) + " میلیارد " + toWord(_num % 1000000000, level + 1);
  } else if (_num < 1000000000000000) {
    result += toWord(parseInt(_num / 1000000000000, 10), level) + " تریلیارد " + toWord(_num % 1000000000000, level + 1);
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

const toEnglishDigits = function (str) {
    var charCodeZero = '۰'.charCodeAt(0);
    return str.replace(/[۰-۹]/g, function (w) {
        return w.charCodeAt(0) - charCodeZero;
    });
}

const toPersianDigits = function (str) {
    const persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
    return str.replace(/[0-9]/g, function (w) {
        return persian[w];
    });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports.toWord = toWord;
  module.exports.toWordRials = toWordRials;
  module.exports.toWordTomans = toWordTomans;
  module.exports.toPersianDigits = toPersianDigits;
  module.exports.toEnglishDigits = toEnglishDigits;
}
