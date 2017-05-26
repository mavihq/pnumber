# pnumber
persian number utilities for javascript

## features
+ Convert number to word
+ Convert number to word in Rials
+ Convert number to word in Tomans
+ Convert persian number to english number in string
+ Convert english number to persian number in string
+ Get only numbers from string
+ Parse persian phone numbers from given string
+ Validate persian phone numbers
+ Switch persian chars to english chars
+ Switch english chars to persian chars

## Usage

es5
```
const pnumber = require('pnumber')

const number = '123456'
console.log(pnumber.toWord(number))
console.log(pnumber.toWordRials(number))
console.log(pnumber.toWordTomans(number))
console.log(pnumber.toPersianDigits(number))
console.log(pnumber.toEnglishDigits('۱۲۳۴'))
console.log(pnumber.toEnglishDigits('۶۳ ن ۵۵۷ ایران ۱۱'))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
دوازده  هزار  و  سیصد  و  چهل  و  پنج  تومان
۱۲۳۴۵۶
1234
63 ن 557 ایران 11
```

es6
```
import {
  toWord,
  toWordRials,
  toWordTomans,
  toEnglishDigits,
  toPersianDigits
} from 'pnumber'

const number = '123456'
console.log(toWord(number))
console.log(toWordRials(number))
console.log(toWordTomans(number))
console.log(toPersianDigits(number))
console.log(toEnglishDigits('۱۲۳۴'))
console.log(toEnglishDigits('۶۳ ن ۵۵۷ ایران ۱۱'))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
د
دوازده  هزار  و  سیصد  و  چهل  و  پنج  تومان
۱۲۳۴۵۶
1234
63 ن 557 ایران 11
```
