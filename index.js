'use strict';

var toWord = function toWord(num, level) {
  if (num === null) {
    return "";
  }

  var _num = parseInt(toEnglishDigits(num.toString()));

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
  var result = "",
    yekan = [
      " یک ",
      " دو ",
      " سه ",
      " چهار ",
      " پنج ",
      " شش ",
      " هفت ",
      " هشت ",
      " نه "
    ],
    dahgan = [
      " بیست ",
      " سی ",
      " چهل ",
      " پنجاه ",
      " شصت ",
      " هفتاد ",
      " هشتاد ",
      " نود "
    ],
    sadgan = [
      " یکصد ",
      " دویست ",
      " سیصد ",
      " چهارصد ",
      " پانصد ",
      " ششصد ",
      " هفتصد ",
      " هشتصد ",
      " نهصد "
    ],
    dah = [
      " ده ",
      " یازده ",
      " دوازده ",
      " سیزده ",
      " چهارده ",
      " پانزده ",
      " شانزده ",
      " هفده ",
      " هیجده ",
      " نوزده "
    ];
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

var toWordRials = function toWordRials(num) {
  return toWord(num, 0) + " ریال";
};

var toWordTomans = function toWordTomans(num) {
  if (num >= 10) {
    num = parseInt(num / 10, 10);
  } else if (num <= -10) {
    num = parseInt(num / 10, 10);
  } else {
    num = 0;
  }

  return toWord(num, 0) + " تومان";
};

var toEnglishDigits = function toEnglishDigits(str) {
  var charCodeZero = '۰'.charCodeAt(0);
  return str.replace(/[۰-۹]/g, function(w) {
    return w.charCodeAt(0) - charCodeZero;
  });
};

var toPersianDigits = function toPersianDigits(str) {
  var persian = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹'
  };
  return str.replace(/[0-9]/g, function(w) {
    return persian[w];
  });
};

var onlyNumbers = function onlyNumbers(str) {
  return toEnglishDigits(str).replace(/\D/g, '');
};

var validateIRPhone = function validateIRPhone(value) {
  var _value = value.toString().trim();
  var _parsedPhoneValid = /^\d+$/.test(parsePhone(_value));
  if (_value.length == 0 && !_parsedPhoneValid)
    return false;
  if (_value[0] == '+' && _value[1] == '9' && _value[2] == '8' && _value.length === 13)
    return true;
  if (_value[0] == '0' && _value[1] == '9' && _value.length === 11)
    return true;
  return false;
};

var parsePhone = function parsePhone(value) {
  var _value = value.toString().trim();
  if (_value[0] == '+' && _value[1] == '9' && _value[2] == '8' && _value.length === 13)
    return "0" + _value.substr(3);
  return _value;
};

function switchToPersianKey(value) {
  if (!value) {
    return;
  }
  const persianChar = [
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "ع",
    "ه",
    "خ",
    "ح",
    "ج",
    "چ",
    "ش",
    "س",
    "ی",
    "ب",
    "ل",
    "ا",
    "ت",
    "ن",
    "م",
    "ک",
    "گ",
    "ظ",
    "ط",
    "ز",
    "ر",
    "ذ",
    "د",
    "پ",
    "و",
    "؟"
  ]

  const englishChar = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "\\[",
    "\\]",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    "\\?"
  ];

  for (var i = 0, charsLen = englishChar.length; i < charsLen; i++) {
    value = value.replace(new RegExp(englishChar[i], "g"), persianChar[i]);
  }

  return toPersianDigits(value);
}

function switchToEnglishKey(value) {
  if (!value) {
    return;
  }
  var persianChar = [
      "ض",
      "ص",
      "ث",
      "ق",
      "ف",
      "غ",
      "ع",
      "ه",
      "خ",
      "ح",
      "ج",
      "چ",
      "ش",
      "س",
      "ی",
      "ب",
      "ل",
      "ا",
      "ت",
      "ن",
      "م",
      "ک",
      "گ",
      "ظ",
      "ط",
      "ز",
      "ر",
      "ذ",
      "د",
      "پ",
      "و",
      "؟"
    ],
    englishChar = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      "?"
    ];

  for (var i = 0, charsLen = persianChar.length; i < charsLen; i++) {
    value = value.replace(new RegExp(persianChar[i], "g"), englishChar[i]);
  }
  return toEnglishDigits(value);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports.toWord = toWord;
  module.exports.toWordRials = toWordRials;
  module.exports.toWordTomans = toWordTomans;
  module.exports.toPersianDigits = toPersianDigits;
  module.exports.toEnglishDigits = toEnglishDigits;
  module.exports.onlyNumbers = onlyNumbers;
  module.exports.parsePhone = parsePhone;
  module.exports.validateIRPhone = validateIRPhone;
  module.exports.switchToEnglishKey = switchToEnglishKey;
  module.exports.switchToPersianKey = switchToPersianKey;
}
