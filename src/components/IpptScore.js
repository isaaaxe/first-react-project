import Papa from "papaparse";
import { useEffect, useRef } from "react";
import pushUpData from "../store/pushup.csv";
import sitUpData from "../store/situp.csv";
import runData from "../store/run.csv";

export default function IpptScore({ ipptScore }) {
  const pushUpTable = useRef();
  const sitUpTable = useRef();
  const runTimeTable = useRef();

  useEffect(() => {
    const fetchParseData = async (data, ref) => {
      Papa.parse(data, {
        download: true,
        delimiter: ",",
        complete: (result) => {
          const trimmedResult = result.data.slice(1, -1);
          let resultObj = {};
          trimmedResult.map((byAgeResult) => {
            resultObj[`${byAgeResult[0]}`] = byAgeResult.slice(1);
            return undefined;
          });
          ref.current = resultObj;
        },
      });
    };
    fetchParseData(pushUpData, pushUpTable);
    fetchParseData(sitUpData, sitUpTable);
    fetchParseData(runData, runTimeTable);
    console.log("useEffect triggered");
  }, []);

  const pushupScore = pushUpTable.current
    ? Number(pushUpTable.current[ipptScore.age][ipptScore.pushups - 1])
    : undefined;
  const situpScore = sitUpTable.current
    ? Number(sitUpTable.current[ipptScore.age][ipptScore.situps - 1])
    : undefined;
  const runScore = runTimeTable.current
    ? Number(runTimeTable.current[ipptScore.age][ipptScore.run - 1])
    : undefined;
  const ipptPoints = pushupScore + situpScore + runScore;
  return (
    <div className="ippt-score">
      {pushUpTable.current ? (
        <p>
          Your score: <strong>{ipptPoints}</strong>
        </p>
      ) : (
        <p>Try using the slider to calculate your IPPT score!</p>
      )}
    </div>
  );
}
