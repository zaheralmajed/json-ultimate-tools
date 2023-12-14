import jsonData from "./data.json";
import Link from "next/link";

interface MyData {
  demo: string;
}

const findUnique: React.FC = () => {
  const data: { data: MyData[] } = jsonData;
  const valueCount: { [key: string]: number } = {};
  data.data.forEach((item) => {
    if (valueCount[item.demo]) {
      valueCount[item.demo]++;
    } else {
      valueCount[item.demo] = 1;
    }
  });
  const uniqueValues: string[] = [];
  const duplicatedValues: string[] = [];

  Object.keys(valueCount).forEach((value) => {
    if (valueCount[value] > 1) {
      duplicatedValues.push(value);
    } else {
      uniqueValues.push(value);
    }
  });
  duplicatedValues.sort();
  uniqueValues.sort();
  return (
    <div className="w-full max-w-md w-full">
      <div className="text-xl  heroButton-3">Duplicated Values</div>

      {duplicatedValues.map((value, index) => (
        <div className="heroButton-2 mt-[0.5rem]" key={index}>
          {value}
        </div>
      ))}
      <br />
      <div className="text-xl  heroButton-4">Unique Values</div>
      {uniqueValues.map((value, index) => (
        <div className="heroButton-2 mt-[0.5rem]" key={index}>
          {value}
        </div>
      ))}
      <Link className="justify-center items-center flex w-full mt-[1rem]" href={"/"}>
        <div className="heroButton h-[2.75rem] max-w-md w-full relative overflow-hidden text-xl">
          <button className="ButtomText">
            <div className="flex justify-center items-center px-[2rem]">
              <div className="justify-center items-center flex gap-[2rem] w-full">
                <div className="flex text-center">Go Back</div>
              </div>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default findUnique;
