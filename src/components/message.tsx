import Link from "next/link";

const Message = () => {
    return (
        <>
            <div className="lg:hidden mockup-code mb-6">
                <footer className="footer-center p-4 bg-cyan-700 text-base-300 font-bold text-xl rounded-box m-6">
                    <p>Text {`>>`} Base</p>
                </footer>
                <p className="ml-6 mr-6">It is a way to convert the text into nitrogenous bases. First the text is converted into binary and then the binary is converted into nitrogenous bases. And now you can download the converted nitrogenous bases as a <code>fasta(.fa)</code> file.
                </p>
                <Link href="https://atiq-ur-rehaman.netlify.app/"><button className="btn btn-outline btn-primary m-4">Read More</button></Link>
            </div>
        </>
    )
}

export default Message;