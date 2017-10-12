document.forms.confirm_rsvp.elements.add_meal.onclick = add_meal_choice;
document.forms.confirm_rsvp.elements.rm_meal.onclick = remove_meal_choice;

function new_meal_choice(meal_choices) {
	var new_node = meal_choices.lastElementChild.cloneNode(true);
	var new_num = meal_choices.childElementCount + 1;
	var new_inputs = new_node.getElementsByTagName("input");

	var field = "";

	for (var i = 0; i < new_inputs.length; i++) {
		if (new_inputs[i].type == "text") {
			field = "name";
			new_inputs[i].value = "";
		} else {
			field = "meal";
		}
		new_inputs[i].name = field + new_num.toString();
	}

	return new_node;
}

function add_meal_choice() {
	var meal_choices = document.getElementById("meal_choices");

	if (meal_choices.childElementCount <= 0) {
		throw new Error("There are no meal choices.");
	}

	var new_choice = new_meal_choice(meal_choices);
	meal_choices.appendChild(new_choice);

	return true;
}

function remove_meal_choice() {
	var meal_choices = document.getElementById("meal_choices");
	meal_choices.removeChild(meal_choices.lastElementChild);
	return true;
}
