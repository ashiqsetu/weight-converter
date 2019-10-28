document.getElementById('poundsOutput').style.visibility = 'hidden';
document.getElementById('gramsOutput').style.visibility = 'hidden';
document.getElementById('kgOutput').style.visibility = 'hidden';
document.getElementById('ozOutput').style.visibility = 'hidden';

document.getElementById('poundsInput').addEventListener('input', function(e) {
	document.getElementById('poundsOutput').style.visibility = 'visible';
	let lbs = e.target.value;
	document.getElementById('poundsToGramOutput').innerHTML = lbs/0.0022046;
	document.getElementById('poundsToKGOutput').innerHTML = lbs/2.2046;
	document.getElementById('poundsToOZOutput').innerHTML = lbs*16;
});

document.getElementById('gramsInput').addEventListener('input', function(e) {
	document.getElementById('gramsOutput').style.visibility = 'visible';
	let lbs = e.target.value;
	document.getElementById('gramsToPoundsOutput').innerHTML = lbs/453.592;
	document.getElementById('gramsToKGOutput').innerHTML = lbs/1000;
	document.getElementById('gramsToOZOutput').innerHTML = lbs/28.35;	
});

document.getElementById('kgInput').addEventListener('input', function(e) {
	document.getElementById('kgOutput').style.visibility = 'visible';
	let lbs = e.target.value;
	document.getElementById('kgToGramOutput').innerHTML = lbs*1000;
	document.getElementById('kgToPoundsOutput').innerHTML = lbs*2.2046;
	document.getElementById('kgToOZOutput').innerHTML = lbs*35.274;
});

document.getElementById('ozInput').addEventListener('input', function(e) {
	document.getElementById('ozOutput').style.visibility = 'visible';
	let lbs = e.target.value;
	document.getElementById('ozToGramsOutput').innerHTML = lbs*28.35;
	document.getElementById('ozToKGOutput').innerHTML = lbs/35.274;
	document.getElementById('ozToPoundsOutput').innerHTML = lbs/16;
});



























