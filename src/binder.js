import { ops } from "./calc";

function bind(button, op) {
	var v1 = parseInt(n1.value) || 0;
	var v2 = parseInt(n2.value) || 0;
	button.addEventListener("click", function() {
		result.value = op(v1, v2);
	});
}

export function bindAll() {
	bind(plus, ops.plus);
	bind(minus, ops.minus);
	bind(times, ops.times);
	bind(divided, ops.divided);
}
