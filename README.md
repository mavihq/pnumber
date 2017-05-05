# pnumber
persian number utilities for javascript


## Usage

es5
```
const pnumber = require('pnumber')

const number = '123456'
console.log(pnumber.toWord(number))
console.log(pnumber.toWordRials(number))
console.log(pnumber.toWordTomans(number))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
دوازده  هزار  و  سیصد  و  چهل  و  پنج  تومان
```

es6
```
import { toWord, toWordRials, toWordTomans } from 'pnumber'

const number = '123456'
console.log(toWord(number))
console.log(toWordRials(number))
console.log(toWordTomans(number))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
د
دوازده  هزار  و  سیصد  و  چهل  و  پنج  تومان
```
