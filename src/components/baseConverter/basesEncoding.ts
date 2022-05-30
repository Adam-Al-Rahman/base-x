/**
 * @file basesEncoding.ts
 * @author Adam_Al-Rahman (https://atiq-ur-rehaman.netlify.app/)
 * @brief convert the input into binary representation and then convert the binary into nitrogenous bases.
 * @version 0.1
 * @date 2022-05-22
 *
 * @copyright Copyright (c) 2022
 *
 */
const convertToDnaBases = ( input: string) => {
    // NOTE: Covert the input into the nitrogenous bases.
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    const text = encoder.encode(input)
    // TODO: Convert the base into the text.
    const textDecode = decoder.decode(text)

    let binary: string = ""
    text.forEach((item) => {
        binary += item.toString(2).padStart(8, '0');
        const currentItemBinary = item.toString(2).padStart(8, '0')
    })


    let twoBit:string[] = []
    for (let i:number = 0; i<binary.length; i+=2){
        twoBit[i] = binary.slice(i, i+2)
    }

    // NOTE: Binary to base
    const dnaEncoding = {
        "00": "A",  // adenine
        "01": "G",  // guanine
        "10": "C",  // cytosine
        "11": "T",  // thymine
    }


    const dnaBase = (x: string) =>{
        const dnaEncodingKeys = Object.keys(dnaEncoding)
        for (let i: number=0; i<dnaEncodingKeys.length; i++){
            if (x == dnaEncodingKeys[i]){
                return Object.values(dnaEncoding)[i];
            }
        }
    }

    const dnaBases = twoBit.map(dnaBase)
    let dnaList: string = ""
    dnaBases.forEach((base) => {
         dnaList += base
    })

    return dnaList;

}



export default convertToDnaBases;