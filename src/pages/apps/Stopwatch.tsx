import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const formatTime = (timeInSeconds: number) => {
    const hours = String(Math.floor(timeInSeconds / 3600));
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = String(timeInSeconds % 60);

    const hoursInString = hours.toString().padStart(2, "0");
    const minutesInString = minutes.toString().padStart(2, "0");
    const secondsInString = seconds.toString().padStart(2, "0");

    return `${hoursInString}:${minutesInString}:${secondsInString}
    `;

    // Logic for hours
    // 3700 seconds => Math.floor(3700 / 3600) = 1 hours

    // Logic for minutes
    // 3700 seconds => Math.floor( 3700 % 3600 ) = 100 seconds => 100 / 60 = 1 minutes

    // Logic for seconds 
    // 3700 seconds => 3700 seconds % 60 = 40 seconds

    // for better understanding Examples:
    // 1 -: 8000 seconds => Math.floor(8000 seconds / 3600) = 2 hours
    // 800 seconds => Math.floor(800 seconds % 3600) / 60 = 13 minutes
    // 20 seconds => 20 seconds % 60 = 20 seconds

    // result of 8000 seconds is 2 hours 13 minutes 20 seconds

    // 2 x 3600 + 13 x 60 + 20 = 8000 seconds
}

const Stopwatch = () => {

    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalID:number;

        if(isRunning) {
            intervalID = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [isRunning]);

    const resetHandler = () => {
        setTime(0);
        setIsRunning(false);
    }

  return (
    <div className="admin-container">
      {/* Sidebar */}
        <AdminSidebar />

      {/* main */}
        <main className="dashboard-app-container">
            <h1>Stopwatch</h1>
            <section>
                <div className="stopwatch">
                    <h2>{formatTime(time)}</h2>
                    <button 
                        onClick={() => setIsRunning((prev) => !prev)}>
                            {isRunning ? "Stop" : "Start"}
                    </button>
                    <button onClick={resetHandler}>Reset</button>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Stopwatch;