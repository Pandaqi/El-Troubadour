const shuffleArray = (array) =>
{
    for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const COLORS = ["red", "orange", "yellow", "lime", "turquoise", "cyan", "blue", "purple", "pink"];

export const shuffleTagColors = () =>
{
	const links = document.getElementsByTagName('a');
	shuffleArray(COLORS);
	
	let curIndex = Math.floor(Math.random() * COLORS.length);

	for(var i = 0; i < links.length; i++) 
	{
		const a = links[i];

		// this link is NOT a normal content link? ignore it
		if(a.classList.contains("dont-randomize") || a.classList.length > 0) { continue; }

		// grab current color, update index to next one
		var curColor = COLORS[curIndex];
		curIndex = (curIndex + 1) % COLORS.length;

		// add to link
		a.classList.add("link-colored");
		a.classList.add("link-" + curColor);
	}

	const tags = document.getElementsByClassName("tag");
	shuffleArray(COLORS);
	curIndex = Math.floor(Math.random() * COLORS.length);

	for(var i = 0; i < tags.length; i++) 
	{
		var t = tags[i];

		if(t.classList.contains('tag-neutral') || t.classList.contains('tag-date')) { continue; }

		const curColor = COLORS[curIndex];
		curIndex = (curIndex + 1) % COLORS.length;

		t.classList.add("tag-" + curColor);
	}
}