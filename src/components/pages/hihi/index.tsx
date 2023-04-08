import React, { useEffect, useState } from "react";
import "../../../index.css";
import { TextField } from "@material-ui/core";
import BodyText from "../../../BodyText";

interface tableProps {
  parsedInfo: { [fieldNames: string]: String };
  headings: string[];
}

const int2roman = (original: number): string => {
  if (original < 1 || original > 3999) {
    throw new Error("Error: Input integer limited to 1 through 3,999");
  }

  const numerals = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 1-9
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 10-90
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 100-900
    ["M", "MM", "MMM"], // 1000-3000
  ];

  // TODO: Could expand to support fractions, simply rounding for now
  const digits = Math.round(original).toString().split("");
  let position = digits.length - 1;

  return digits.reduce((roman, digit) => {
    if (digit !== "0") {
      roman += numerals[position][parseInt(digit) - 1];
    }

    position -= 1;

    return roman;
  }, "");
};

const Table = ({ parsedInfo, headings }: tableProps) => {
  // let a = headings.map((h) => h)
  //   console.log(headings);
  return (
    <table>
      <thead>
        <tr>
          {headings.map((h) => {
            return <th key={h as React.Key}>{h}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {headings.map((h) => {
            return <td>{parsedInfo[h]}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

const Hihi: React.FC<any> = ({}) => {
  const [info, setInfo] = useState("");
  const [headings, setHeadings] = useState("");
  const [parsedHeadings, setParsedHeadings] = useState<string[]>([]);
  //   const [splitInfo, setSplitInfo] = useState<String[]>([]);
  const [parsedInfo, setParsedInfo] = useState<{ [fieldName: string]: String }>(
    {}
  );

  //   cons
  //   useEffect(() => {
  //     console.log(parsedInfo);
  //   }, [parsedInfo]);

  return (
    <div className="container">
      <a href="#">Home</a>
      <div style={{ paddingTop: "2vh" }}>
        <TextField
          label="Headings"
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={headings}
          onChange={(e) => {
            setHeadings(e.target.value);
            setParsedHeadings(e.target.value.split(","));
          }}
        ></TextField>
      </div>
      <div style={{ paddingTop: "2vh" }}>
        <TextField
          multiline
          id="outlined-basic"
          label="Data"
          variant="outlined"
          value={info}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInfo(e.target.value);
            let splitInfo = e.target.value.split("\n");
            let prevParse = {};
            for (const s of splitInfo) {
              if (s.includes(":")) {
                let trimmed: String[] = s.split(":").map((i) => i.trim());
                let t1 = trimmed[0];
                let b = trimmed[1];
                if (t1.toLowerCase().includes("kelas")) {
                  b = int2roman(parseInt(b.valueOf()));
                }
                prevParse = { ...prevParse, [t1.valueOf()]: b };
                // setParsedInfo((prevState) => ({ ...prevState, [t1]: b }));
                // console.log(parsedInfo);
              }
            }
            // console.log("change";
            setParsedInfo(prevParse);
          }}
        />
      </div>
      <div>
        <BodyText>
          <Table
            parsedInfo={parsedInfo}
            headings={parsedHeadings}
            // headings={[
            //   "Judul",
            //   "",
            //   "TINGKATAN SEKOLAH",
            //   "Usia/Kelas",
            //   "Buku ini ISBN",
            // ]}
          />
        </BodyText>
      </div>
    </div>
  );
};

export default Hihi;
