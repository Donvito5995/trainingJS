function countDevelopers(list) { 
    // your awesome code here :)s
    return list.filter((item) => item.continent === 'Europe' && item.language === 'JavaScript')
      .length;
  }