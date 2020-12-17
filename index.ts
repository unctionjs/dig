import get from "@unction/get";
import reduceValues from "@unction/reducevalues";
import flip from "@unction/flip";

export default function dig<A, B, C> (keychain: Array<A>) {
  return function digKeyChain (tree: B | undefined): C | undefined {
    return reduceValues(flip(get))(tree)(keychain);
  };
}
