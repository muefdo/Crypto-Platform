import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import SearchBar from "../components/SearchBar";
import Coins from "@/components/Coins";
import CoinList from "@/components/CoinList";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";

const AllCoins = ({ initialCoins }) => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState(initialCoins || []);

  // Fetch the coins data
  const fetchCoinsData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    const data = await response.json();
    return data;
  };

  // Filter the coins based on the search input
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // Update the coins state with the fetched data
  useEffect(() => {
    fetchCoinsData().then((coinsData) => {
      setCoins(coinsData);
    });
  }, []);

  // Handle search input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //Search

  //pagination part below
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostperPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredCoins.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <Layout>
        <div>
          <SearchBar type="text" placeholder="Search" onChange={handleChange} />
          <CoinList filteredCoins={currentPosts} />
          <Pagination
            totalPosts={filteredCoins.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Layout>
    </>
  );
};

export default AllCoins;
