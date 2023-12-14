import ButtonMain from "./components/buttonMain";

const page = () => {
  return (
    <div className="w-full max-w-md w-full">
      <ButtonMain LINK={"/find-missing-number"} TEXT={"Missing Numbers"} DESC={"Find Missing Numbers of a Sequence"} />
      <ButtonMain LINK={"/find-unique"} TEXT={"Unique & Duplicated"} DESC={"Find Unique & Duplicated Values"} />
    </div>
  );
};

export default page;
