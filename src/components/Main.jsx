import { use } from "react";
import MainCard from "./MainCard";

const Main = ({ mainPromise, carts, setCarts }) => {
  const main = use(mainPromise);

  return (
    <div className="py-3 px-6">
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {main.map((mains) => (
            <MainCard
              key={mains.id}
              mains={mains}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
