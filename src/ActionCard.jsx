import { useEffect, useState } from "react"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

export default ({ action, idx, voices }) => {
    //usEffect serve fargli leggere soltanto la prima card 
    useEffect(() => {
        if (idx === 0) {
            let message = new SpeechSynthesisUtterance(action)
            message.voice = voices.find(voice => voice.name === "Luca")
            speechSynthesis.speak(message)
        }
    }, [idx])

    return (
        <Card style={{
            height: idx === 0 ? "448px" : "128px",
            width: idx === 0 ? "calc(100% - 32px)" : "calc(100% - 512px)",
            margin: idx === 0 ? "16px" : "16px 256px",
            backgroundColor: idx === 0 ? "#0057cb" : "white",
            display: "grid",
            placeContent: "center",
            borderRadius: "8px"
        }}
            elevation={4} >
            <Typography style={{
                fontSize: idx === 0 ? "128px" : "64px",
                fontWeight: 300,
                color: idx === 0 ? "white" : "black",
            }}>
                {action}
            </Typography></Card>
    )
}
