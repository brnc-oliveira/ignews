import { useEffect, useState } from "react"

export function Async() {
    const [isButtonInvisible, setButtonInvisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setButtonInvisible(true)
        }, 1000)
    }, [])

    return (
        <div>
            <div>Hello World!</div> 
            { !isButtonInvisible && <button>Button</button> }
        </div>
    )
}