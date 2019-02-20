var outRequest = new XMLHttpRequest();
outRequest.open('POST','Phone1.json')
outRequest.onload = function()
{
	console.log(outRequest.responseText);
};
outRequest.send();