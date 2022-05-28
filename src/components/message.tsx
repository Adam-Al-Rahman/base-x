import Link from "next/link";

const Message = () => {
    return (
        <>
            <footer className="lg:hidden p-4 bg-neutral text-neutral-content rounded-box mb-6">
                <div className="footer-center p-4 bg-cyan-700 text-base-300 font-bold text-xl rounded-box m-6">
                    <p>Text {`>>`} Base</p>
                </div>
                <p className="ml-6 mr-6">It is a way to convert the text into nitrogenous bases. First the text is converted into binary and then the binary is converted into nitrogenous bases. And now you can download the converted nitrogenous bases as a <code>fasta(.fasta)</code> file.</p>
                <Link href="https://atiq-ur-rehaman.netlify.app/"><button className="btn btn-outline btn-primary m-4">Read More</button></Link>
            </footer>
        </>
    )
}

export default Message;