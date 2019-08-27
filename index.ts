import get from "@unction/get";
import reduceValues from "@unction/reducevalues";
import flip from "@unction/flip";
export default function dig (keychain) {
  return function digKeyChain (tree) {
    return reduceValues(flip(get))(tree)(keychain);
  };
}
