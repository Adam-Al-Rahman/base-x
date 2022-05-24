import { useState } from "react";
import type { NextPage } from 'next';
import BaseComponent from './baseConvertor/basesEncoding'

const Center = () => {
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

    return (
        <>
            <div className="w-full-container">
                <div className="flex w-full">
                    <button id="changeId" className="btn btn-outline btn-primary w-20 h-20 sm:w-24 sm:h-16 bg-base-300 rounded-box">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                    </button>
                    <div className="divider divider-horizontal">:</div>
                    <div className="grid h-20 sm:p-4 sm:h-16 flex-grow card bg-neutral rounded-box place-items-center font-bold text-base">
                        <p id="BiBa">Binary {`>>`} Base</p>
                        <p className="hidden" id="BaBi">Base {`>>`} Binary</p>
                    </div>
                </div>
                <div className="flex w-full mt-8">
                    <input name="input" type="text" placeholder="text" className="input w-full max-w-xm  focus:outline-none" onChange={handleInput} />
                    <button className="btn btn-outline ml-2 btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </button>
                </div>
                <div className="flex w-full mt-8 mb-8">
                    <textarea value={BaseComponent(text.input)} className="textarea input-none w-full h-26 focus:outline-none resize-none scrollbar-hide" placeholder="GTGAGCGGGTCAGTGA" />
                    <div className="flex flex-col">
                        <button className="btn btn-outline ml-2 mb-2 btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="btn btn-outline ml-2 btn-primary" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Center;