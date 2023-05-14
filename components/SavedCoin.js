import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
const SavedCoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          Portfolionuz boş pls add new{" "}
          <Link href="/" className="text-sky-300">
            Buraya tıklayıp ana sayfaya dönün
          </Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b ">
              <th className="px-4">Rank</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden ">
                <td>{coin?.rank}</td>
                <td>
                  <Link href={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} alt="sa" className="w-8 mr-4" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose className="bg-white"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
