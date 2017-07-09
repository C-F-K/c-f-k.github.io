var quotes = [
	{
		quote: "But for those who profess themselves guardians of the helpless sheep, alas, how much I fear that they are wolves eager to rend them alive.",
		speaker: "Francesco Petrarca"
	},
	{
		quote: "Humans are capable of so much more than we yet understand. We're really something. Star Trek fans believe that, and so do I.",
		speaker: "Gene Roddenberry"
	},
	{
		quote: "In my walks, every man I meet is my superior in some way, and in that I learn from him.",
		speaker: "Ralph Waldo Emerson"
	},
	{
		quote: "The fiend in his own shape is less hideous, than when he rages in the breast of man.",
		speaker: "Nathaniel Hawthorne"
	},
	{
		quote: "The dose makes the poison.",
		speaker: "Theophrastus Bombastus von Hohenheim (Paracelsus)"
	},
	{
		quote: "However vast the darkness, we must supply our own light.",
		speaker: "Stanley Kubrick"
	},
	{
		quote: "Coffee: the finest organic suspension ever devised.",
		speaker: 'Captain Kathryn Janeway, <i>Star Trek: Voyager</i>'
	},
	{
		quote: "Go beyond the impossible and kick reason to the curb!",
		speaker: 'Kamina, <i>Tengen Toppa Gurren Lagann</i>'
	}
];

function randIntBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randElFromArr(arr) {
    return arr[randIntBetween(0,(arr.length - 1))];
}

$(document).ready(function(){
	var quote = randElFromArr(quotes);
	$('#quote').append('<blockquote>"' + quote.quote + '"</blockquote>' + '<p class="text-right">&ndash; ' + quote.speaker + '</p>');
});