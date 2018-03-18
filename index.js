function shout(string)
{
 return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
var spy = 'hello'

function logShout(string)
{
  console.log(spy.shout)
}