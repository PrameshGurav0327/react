import { AvengerWelcome } from "./Shield";
import { AvengerUser } from "./User";

export function ShieldPass(props) {
  const isregister = props.register
  if (isregister) {
    return <AvengerUser/>
  }
  else {
    return <AvengerWelcome/>
  }
}