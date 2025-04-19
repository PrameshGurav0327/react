import { useState } from "react";

export function useAvengerPower() {
    const [power, setPower] = useState(100)

    const increasePower = () => {
        setPower(power + 1)
    }

    return { power, increasePower }
}