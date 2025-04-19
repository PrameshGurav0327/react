import { useAvengerPower } from "./Shield";

export function AvengerPower() {
  const pow = useAvengerPower()
  const pow1 = useAvengerPower()

  console.log(pow.power)
  return(
    <>
    <h1>Power of Hero : {pow.power}</h1>
    <button onClick={pow.increasePower}>Increase Power</button>

    <h1>Power of Hero : {pow1.power}</h1>
    <button onClick={pow1.increasePower}>increase Power</button>
    </>
  )
}