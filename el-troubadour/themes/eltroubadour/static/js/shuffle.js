function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function onDocumentLoaded() {

	var links = document.getElementsByTagName('a');
	var linkColors = ['green', 'orange', 'pink', 'red', 'lightblue', 'darkblue', 'pink', 'yellow'];
	shuffleArray(linkColors);
	
	var curIndex = Math.floor(Math.random() * linkColors.length);

	for(var i = 0; i < links.length; i++) {
		var a = links[i];

		// this link is NOT a normal content link? ignore it
		if(a.classList.contains("big-link") || a.classList.length > 0) { continue; }

		// grab current color, update index to next one
		var curColor = linkColors[curIndex];
		curIndex = (curIndex + 1) % linkColors.length;

		// add to link
		a.classList.add("col-link");
		a.classList.add("link-" + curColor);
	}

	var tags = document.getElementsByClassName("tag");
	var tagColors = ['green', 'lightgreen', 'blue', 'lightblue', 'red', 'orange', 'brown', 'pink', 'turqoise', 'purple', 'yellow', 'grey'];
	shuffleArray(tagColors);

	curIndex = Math.floor(Math.random() * tagColors.length);

	for(var i = 0; i < tags.length; i++) {
		var t = tags[i];

		if(t.classList.contains('tag-neutral') || t.classList.contains('tag-date')) { continue; }

		var curColor = tagColors[curIndex];
		curIndex = (curIndex + 1) % tagColors.length;

		t.classList.add("tag-" + curColor);
	}
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(onDocumentLoaded)

