const pnumber = require('./index')

const number = '123456'
console.log(pnumber.toWord(number))
console.log(pnumber.toWordRials(number))
console.log(pnumber.toWordTomans(number))
console.log(pnumber.toPersianDigits(number))
console.log(pnumber.toEnglishDigits('۱۲۳۴'))
console.log(pnumber.toEnglishDigits('۶۳ ن ۵۵۷ ایران ۱۱'))
