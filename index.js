const fs = require("fs");
const path = require("path");

const myArgs = process.argv;
let plik;
if (myArgs[2] == "fff") {
  let dlugosc = 0;
  let i = myArgs[1].length;
  let address;
  myArgs.slice(3).forEach((el) => {
    let helper = el;
    if (el[0] == "-" && el[1] == "n" && el[2]) {
      el = [...el].splice(2, 4);
      dlugosc = parseInt(el.join(""));
      console.log(dlugosc);
    } else {
      plik = helper;
    }
  });

  while (myArgs[1][i] != "\\") {
    address = myArgs[1].substring(0, i - 1);
    i--;
  }

  fs.readFile(address + "\\" + plik, "utf8", function (err, data) {
    if (err) console.log(err);
    if (dlugosc) {
      console.log(
        data
          .split(/\s+/)
          .map((el) =>
            [...el].filter(
              (line) => line.charCodeAt() >= 65 && line.charCodeAt() <= 127
            )
          )
          .filter((tab) => {
            return tab.length >= dlugosc;
          })
          .map((el) => el.join(""))
      );
    } else {
      dlugosc = 1;
      console.log(
        data
          .split(/\s+/)
          .map((el) =>
            [...el].filter(
              (line) => line.charCodeAt() >= 65 && line.charCodeAt() <= 127
            )
          )
          .filter((tab) => {
            return tab.length >= dlugosc;
          })
          .map((el) => el.join(""))
      );
    }
  });
}
