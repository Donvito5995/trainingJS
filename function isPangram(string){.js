function isPangram(string){
    var check = /([a-z])(?!.*\1)/gi;
    return(string.match(check)).length === 26;
  }