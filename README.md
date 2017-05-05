# pnum
persian number utilities for javascript


## Usage

es5
```
const pnum = require('pnum')

const number = '123456'
console.log(pnum.toWord(number))
console.log(pnum.toWordRials(number))
console.log(pnum.toWordTomans(number))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
دوازده  هزار  و  سیصد  و  چهل  و  پنج  تومان
```

es6
```
import { toWord, toWordRials, toWordTomans } from 'pnum'

const number = '123456'
console.log(toWord(number))
console.log(toWordRials(number))
console.log(toWordTomans(number))

+++++++++
output:
یکصد  بیست  سه  هزار  چهارصد  پنجاه  شش
یکصد  و  بیست  و  سه  هزار  و  چهارصد  و  پنجاه  و  شش  ریال
د
```
