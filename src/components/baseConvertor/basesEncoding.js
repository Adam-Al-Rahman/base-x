"use strict";
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
exports.__esModule = true;
var convertToDnaBases = function (input) {
    // NOTE: Covert the input into the nitrogenous bases.
    var encoder = new TextEncoder();
    var decoder = new TextDecoder();
    var text = encoder.encode(input);
    var textDecode = decoder.decode(text);
    console.log("".concat(textDecode, "\n").concat(text));
    var binary = "";
    text.forEach(function (item) {
        binary += item.toString(2).padStart(8, '0');
        var currentItemBinary = item.toString(2).padStart(8, '0');
        console.log("item: ".concat(currentItemBinary));
    });
    console.log(binary);
    var twoBit = [];
    for (var i = 0; i < binary.length; i += 2) {
        twoBit[i] = binary.slice(i, i + 2);
    }
    // NOTE: Binary to base
    var dnaEncoding = {
        "00": "A",
        "01": "G",
        "10": "C",
        "11": "T"
    };
    var dnaBase = function (x) {
        var dnaEncodingKeys = Object.keys(dnaEncoding);
        for (var i = 0; i < dnaEncodingKeys.length; i++) {
            if (x == dnaEncodingKeys[i]) {
                return Object.values(dnaEncoding)[i];
            }
        }
    };
    var dnaBases = twoBit.map(dnaBase);
    var dnaList = "";
    dnaBases.forEach(function (base) {
        dnaList += base;
    });
    return dnaList;
};
console.log(convertToDnaBases("text"));
exports["default"] = convertToDnaBases;
