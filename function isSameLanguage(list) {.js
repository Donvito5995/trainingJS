function isSameLanguage(list) {
 return list.every(item => list[0].language === item.language)
}