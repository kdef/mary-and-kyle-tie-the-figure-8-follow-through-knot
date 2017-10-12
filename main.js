document.forms.rsvp.onsubmit = submit_or_redirect;
//try {
//    form.addEventListener("submit", someFunction, false);
//} catch(e) {
//    form.attachEvent("onsubmit", someFunction); //Internet Explorer 8-
//}

function submit_or_redirect() {
	var attending = document.forms.rsvp.elements.attending.value;
	var name = document.forms.rsvp.elements.name.value;

	if (name.length == 0) return false;

	if (attending == "no")
		return true;

	if (attending == "yes")
		window.location = "rsvp.html";

	return false;
}
