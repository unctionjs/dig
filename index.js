import get from "@unction/get"
import reduceValues from "@unction/reducevalues"
import flip from "@unction/flip"

export default function dig (keychain: KeyChainType): Function {
  return function digKeyChain (tree: TreeType): ValueType {
    return reduceValues(flip(get))(tree)(keychain)
  }
}
