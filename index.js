function theBeatlesPlay(musicians,instruments){
  var arr = [];

  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i])
  }

return arr;
}


function johnLennonFacts(facts){
  var count = 0;
  var arr = [];

  while (count < facts.length){
    arr.push(facts[count] + "!!!")
    count++;
  }
  return arr;
}


function iLoveTheBeatles(num){

  var i = 0;
  var love = [];

  do{
    love.push("I love the Beatles!");
    i++;
  }
  while (i < num);

}
