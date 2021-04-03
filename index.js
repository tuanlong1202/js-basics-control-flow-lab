function scuberGreetingForFeet(someValue){
  // Write your code here!
  
  var strReturnMessage = '';
  
  if (someValue <= 400) 
    strReturnMessage = 'This one is on me!';
  else if (someValue > 2000 && someValue <= 2500)
    strReturnMessage = 'I will gladly take your thirty bucks.';
  else if (someValue > 2500)
    strReturnMessage = 'No can do.';
  
  return strReturnMessage;

}

function ternaryCheckCity(desCity){
  // Write your code here!

  if ( desCity == 'NYC')
    return 'Ok, sounds good.';
  else 
    return 'No go.';
}

function switchOnCharmFromTip(intTip){
  // Write your code here!

  switch (intTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default :
      return 'Bye.';
  }

}