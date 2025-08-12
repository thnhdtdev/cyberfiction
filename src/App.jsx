import {gsap} from "gsap";
import './App.css'
import {useEffect, useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function App() {
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div
            style={{
                height: "200vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                ref={boxRef}
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "green",
                    margin: "50px auto",
                }}
            />
        </div>
    );
}

export default App
