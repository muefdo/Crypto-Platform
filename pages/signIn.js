import Layout from "@/components/Layout";
import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const signIn = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
            <h1 className="text-2xl font-bold ">Giriş Yap</h1>
            <form>
              <div className="my-4">
                <label>E-Mail</label>
                <div className="my-2 w-full relative ">
                  <input
                    className="text-white w-full p-2 bg-slate-500  border rounded-2xl"
                    type="email"
                    placeholder="mail@gmail.com "
                  />
                  <AiOutlineMail className="absolute right-2 top-2 text-white-400 w-6 h-6" />
                </div>
              </div>
              <div className="my-4">
                <label>Şifre</label>
                <div className="my-2  w-full relative ">
                  <input
                    className="text-white w-full p-2 bg-slate-500  border rounded-2xl"
                    type="password"
                    placeholder="******* "
                  />
                  <AiFillLock className="absolute right-2 top-2 text-white-400 w-6 h-6" />
                </div>
              </div>
              <div>
                <button className="w-full my-2 p-3 bg-sky-500 rounded-xl ">Giriş Yap</button>
              </div>
            </form>
            <p>
              {" "}
              Hesabın yok mu{" "}
              <Link href="/signUp" className="text-sky-200">
                Kaydol
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default signIn;
