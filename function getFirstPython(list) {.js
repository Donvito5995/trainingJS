  function getFirstPython(list) {
    list = list.filter(i => i.language == 'Python')
    if (!list.length) return 'There will be no Python developers' 
    return `${list[0].firstName}, ${list[0].country}`
    }
