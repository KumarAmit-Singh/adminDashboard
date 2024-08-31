import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

// allLetters
const allLetters = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// allNumbers
const allNumbers = "1234567890";

// allSymbols
const allSymbols = "!@#$%^&*()_+";


const Coupon = () => {

    const [size, setSize] = useState<number>(8);
    const [prefix, setPrefix] = useState<string>("");
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const [coupon, setCoupon] = useState<string>("");
    
    // return promise
    const copyText = async (coupon: string) => {
        await window.navigator.clipboard.writeText(coupon);
        setIsCopied(true)
    };

    const submitHandler = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!includeNumbers && !includeCharacters && !includeSymbols) {
            return alert("Please Select One At Least")
        }

        // use for text to include result(it means that accept value as string or empty string from first input box)
        let result: string = prefix || "";

        // use for looplength (it means select some value are first input box then remain the counted value are generate from include box(number, character, symbol))
        const loopLength: number = size - result.length;

        for(let i = 0; i < loopLength; i++) {

            // entireString (represent that all of the entire string value means total resulted value from first input box with include(number, character, symbol))
            let entireString: string = "";

            if(includeCharacters) {
                entireString += allLetters;
            }
            if(includeNumbers) {
                entireString += allNumbers;
            }
            if(includeSymbols) {
                entireString += allSymbols;
            }

            const randomNumber: number = ~~ (Math.random() * entireString.length);

            result += entireString[randomNumber];

            setCoupon(result)
        }
    };

    useEffect(() => {
        setIsCopied(false)
    }, [coupon])

  return (
    <div className="admin-container">
      {/* Sidebar */}
        <AdminSidebar />

      {/* main */}
        <main className="dashboard-app-container">
            <h1>Coupon</h1>
            <section>
                <form className="coupon-form" onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        placeholder="Text to include" value={prefix} 
                        onChange={((event) => 
                            setPrefix(event.target.value)
                        )}
                        maxLength={size}
                    />
                    <input 
                        type="number" 
                        placeholder="Coupon Length" value={size} 
                        onChange={((event) => 
                            setSize(Number(event.target.value))
                        )}
                        min={8}
                        max={25}
                    />

                    <fieldset>
                        <legend>Include</legend>

                        <input 
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => 
                                setIncludeNumbers((prev) => !prev)
                            }
                        />
                        <span>Numbers</span>

                        <input 
                            type="checkbox"
                            checked={includeCharacters}
                            onChange={() => 
                                setIncludeCharacters((prev) => !prev)
                            }
                        />
                        <span>Characters</span>

                        <input 
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => 
                                setIncludeSymbols((prev) => !prev)
                            }
                        />
                        <span>Symbols</span>
                    </fieldset>

                    <button type="submit">Generate</button>
                </form>
                {
                    coupon && <code>
                                {coupon} 
                                <span onClick={() => copyText(coupon)}>
                                    {isCopied ? "Copied" : "Copy"}
                                </span>
                              </code>
                }
            </section>
        </main>
    </div>
  )
}

export default Coupon;