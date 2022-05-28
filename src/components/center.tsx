import { useState, useEffect } from "react";
import type { NextPage } from 'next';
import BaseComponent from './baseConverter/basesEncoding'
import MessageComp from "./message"

const Center: NextPage = () => {
    const [text, setInput] = useState({
        input: ""
    });

    let input: string;
    let value: string;
    const handleInput = (event: { target: { name: string; value: string; }; }) => {
        input = event.target.name;
        value = event.target.value;
        setInput({ ...text, [input]: value });
    }

    const convertedBases = BaseComponent(text.input);

    const copyText = () => {
        if (text.input) {
            navigator.clipboard.writeText(convertedBases);
            const copyButton = (document.getElementById("copyButton") as HTMLElement).innerHTML;
            (document.getElementById("copyButton") as HTMLElement).innerHTML = "copied!";
            setTimeout(() => {
                (document.getElementById("copyButton") as HTMLElement).innerHTML = copyButton;
            }, 2000);

        }
    }
    const fileExplorer = async () => {
        let [fileHandle] = await (window as any).showOpenFilePicker();
        let fileData = await fileHandle.getFile();
        let text = await fileData.text();
    };


    const exportToFasta = () => {
        const data = `>Base-X | file: base-x.fasta | converted the text to nitrogenous bases |sequence\n${convertedBases}`;
        console.log(data);
        const blob = new Blob([data], { type: "fasta" });

        const href = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), {
            href,
            style: "display: none",
            download: "base-x.fasta"
        });
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(href);
        a.remove();
    }

    // const ctrlSlash = () => {


    //     document?.addEventListener("keydown", (e) => {
    //         const inputField = (document.getElementById("inputField") as HTMLInputElement);
    //         if (e.ctrlKey && e.key == "/") {
    //             inputField.focus();
    //             inputField.select();
    //             inputField.click();
    //             console.log(e);
    //         }
    //     })
    // };

    // NOTE: To select the input field ctrl + /
    useEffect(() => {
        const inputField = (document.getElementById("inputField") as HTMLInputElement);
        const listener = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key == "/" || event.code === "command" && event.key == "/") {
                inputField.focus();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <>
            <div className="w-full-container" >
                <div className="flex w-full">
                    <button id="changeId" className="hidden btn btn-outline btn-primary w-20 h-20 sm:w-24 sm:h-16 bg-base-300 rounded-box">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                    </button>
                    <div className="hidden divider divider-horizontal">:</div>
                    <div className="border-2 border-cyan-700 grid h-20 sm:p-4 sm:h-16 flex-grow card bg-neutral rounded-box place-items-center font-bold text-base">
                        <div className="flex">
                            <kbd className="kbd">Text</kbd>
                            <kbd className="kbd ml-4 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </kbd>
                            <kbd className="kbd">Base</kbd>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-8">
                    <input name="input" type="text" id="inputField" placeholder="text" className="input w-full max-w-xm  focus:outline-none" onChange={handleInput} />
                    <div className="hidden lg:flex kbd bg-neutral">
                        <kbd className="kbd bg-base-100 ml-2 kbd-sm pl-6 pr-6">ctrl</kbd><kbd className="kbd bg-base-100 kbd-sm">+</kbd><kbd className="kbd kbd-sm bg-base-100">/</kbd>
                    </div>
                    <button onClick={fileExplorer} id="inputFile" className="btn btn-outline ml-2 btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </button>
                    {/* <input id="selectFile" type="file" style={{ display: "none" }}></input> */}
                </div>
                <div className="flex w-full mt-8 mb-8">
                    <textarea id="outputTextArea" readOnly value={BaseComponent(text.input)} className="textarea  w-full h-26 focus:outline-none resize-none " placeholder="GTGAGCGGGTCAGTGA" />
                    <div className="flex flex-col">
                        <button onClick={copyText} id="copyButton" className="btn btn-outline ml-2 mb-2 btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button onClick={exportToFasta} id="downloadButton" className="btn btn-outline ml-2 btn-primary" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <style jsx global>{`
                    /* width */
                    ::-webkit-scrollbar {
                    width: 0.8rem;
                    height: 1rem;
                    }

                    /* Track */
                    ::-webkit-scrollbar-track {
                    border-radius: 100vh;
                    background: #1d283a;
                    }

                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                    background: #3abff8;
                    border-radius: 100vh;
                    border: 3px solid #1d283a;
                    }

                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                    background: #0e7490;
                    }
                `}</style>
                <MessageComp />
            </div>
        </>
    )
}


export default Center;