function bind(button, op) {
	button.addEventListener("click", function() {
		var v1 = parseInt(n1.value) || 0;
		var v2 = parseInt(n2.value) || 0;
		result.value = op(v1, v2);
	});
}

function bindAll() {
	bind(plus, ops.plus);
	bind(minus, ops.minus);
	bind(times, ops.times);
	bind(divided, ops.divided);
	bind(mod, ops.mod);
	bind(pow, ops.pow);
}
