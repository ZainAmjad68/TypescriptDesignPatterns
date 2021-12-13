"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
let manCwins = 0;
for (let match of reader.data) {
    if (match[1] === "Man City" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manCwins++;
    }
    else if (match[2] === "Man City" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manCwins++;
    }
}
console.log(`Manchested City won ${manCwins} games`);
