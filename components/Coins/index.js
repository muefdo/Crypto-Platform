import Pagination from "../Pagination";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";

const Coins = ({
  rank,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <>
      <Link href="/coin/[id]" as={`/coin/${id}`} legacyBehavior>
        <a>
          <div className="flex justify-center overflow-x-hidden">
            <div className="flex flex-row justify-start items-center md:h-20 h-14 border-b-slate-500 border-b md:w-[1000px] w-[110%] p-8">
              <div className="flex items-center pr-6">
                <div className="flex items-center mr-3">
                  <AiOutlineStar className="md:w-5 md:h-5  w-4 h-4" />
                </div>
                <h1 className="md:mr-3 mr-1 text-gray-100 font-bold">#{rank}</h1>
                <img src={image} alt={name} className="md:h-7 md:w-7 mr-3  h-5 w-5" />
                <h1 className="text-white-400 md:w-36 w-14 md:mr-10 mr-5 md:text-l text-sm">
                  {name}
                </h1>
                <p className="uppercase md:w-28 w-2 mr-5 md:text-l text-sm">{symbol}</p>
              </div>

              <div className="justify-between flex  md:text-l text-sm">
                <p className="w-4 mr-6">${price}</p>

                <p
                  className={` w-full md:w-16  ml-12 md:ml-20 md:text-l text-sm  ${
                    priceChange < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {priceChange.toFixed(2)}%
                </p>

                <p className="w-96 hidden md:block mx-10">
                  ${volume.toLocaleString()}
                </p>

                <p className="hidden md:block w-full">
                  Mkt Cap: ${marketcap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Coins;
