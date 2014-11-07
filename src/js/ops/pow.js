import { minus } from "./minus";
import { times } from "./times";
import { divided } from "./divided";
import { mod } from "./mod";

/*
 * exponentiation by squaring.
 * see http://en.wikipedia.org/wiki/Exponentiation_by_squaring
 */
export function pow(x, n) {
	if (n < 0) {
		return pow(divided(1, x), times(-1, n));
	} else if (n == 0) {
		return 1;
	} else if (n == 1) {
		return x;
	} else {
		let squared = times(x, x);
		if (mod(n, 2) == 0) {
			let newN = divided(n, 2);
			return pow(squared, newN);
		} else {
			let newN = divided(minus(n, 1), 2);
			return times(x, pow(squared, newN));
		}
	}
}
