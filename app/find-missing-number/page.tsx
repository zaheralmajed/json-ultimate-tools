import Link from "next/link";
import jsonData from "./data.json";
interface MyData {
  id: number;
}

const missingNumbers: React.FC = () => {
  const data: { data: MyData[] } = jsonData;

  const allIDNumbers: number[] = data.data.map((item) => item.id);
  const minNumber = Math.min(...allIDNumbers);
  const maxNumber = Math.max(...allIDNumbers);
  const missingNumbers: number[] = [];
  for (let i = minNumber; i <= maxNumber; i++) {
    if (!allIDNumbers.includes(i)) {
      missingNumbers.push(i);
    }
  }
  missingNumbers.sort((a, b) => a - b);
  return (
    <div className="w-full max-w-md w-full">
      <div className="text-xl  heroButton-3">Missing Numbers of a Sequence</div>
      {missingNumbers.map((number, index) => (
        <div className="heroButton-2 mt-[0.5rem]" key={index}>
          {number}
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

export default missingNumbers;
