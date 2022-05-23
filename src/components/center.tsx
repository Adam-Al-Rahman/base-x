import type { NextPage } from 'next';

const Center = () => {
    return (
        <>
            <div className="flex w-full">
                <button id="changeId" className="btn btn-base w-20 h-20 sm:w-24 sm:h-16 bg-base-300 rounded-box place-content-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </button>
                <div className="divider divider-horizontal">:</div>
                <div className="grid h-20 sm:p-4 sm:h-16 flex-grow card bg-base-300 rounded-box place-items-center font-bold text-base">
                    <p id="BiBa">Binary {`>>`} Base</p>
                    <p className="hidden" id="BaBi">Base {`>>`} Binary</p>
                </div>
            </div>
        </>
    )
}

export default Center;