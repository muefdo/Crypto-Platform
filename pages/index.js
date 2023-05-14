import Head from "next/head";
import { Inter } from "next/font/google";
import SearchBar from "../components/SearchBar";
import Coins from "@/components/Coins";
import CoinList from "@/components/CoinList";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import AllCoins from "@/components/AllCoins";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 

  return (
    <> 
      <AllCoins />
    </>
  );
}

