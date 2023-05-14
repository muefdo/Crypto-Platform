import Layout from "@/components/Layout";
import SavedCoin from "@/components/SavedCoin";
import React from "react";

const account = () => {
  return (
    <>
      <Layout>
        <div className="max-w-[1140px] mx-auto">
          <div className="flex justify-between items-center my-12 py-8 rounded-xl mx-3">
            <div>
              <h1 className="text-2xl font-bold">Account Page</h1>
              <div>
                <p>Welcome, User</p>
              </div>
            </div>
            <div>
              <button className="border px-6 py-2 rounded-2xl hover:bg-sky-600 duration-200 font-semibold">Çıkış Yap</button>
            </div>
          </div>
          <div className="flex justify-between items-center my-12 py-8 rounded-md mx-3">
            <div className="w-full min-h-[300px] ">
              <h1 className="text-2xl font-bold py-4">Portfolio</h1>
              <SavedCoin />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default account;
