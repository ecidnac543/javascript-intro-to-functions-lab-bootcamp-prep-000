function shout(string)
{
 return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
  console.log(string.toUpperCase())
}
function logWhisper(string)
{
  console.log(string.toLowerCase())
}
var uppercase = "HELLO"
var lowercase = "hello"
var love = "I love you, Grandma."

function sayHiToGrandma(string)
{
  if (lowercase.toLowerCase() === lowercase){
    return string()
  }else if(uppercase.toUpperCase() === uppercase){
    return string()
  }else if(love){
    return string()
  }
  return string.toMixedCase()
}