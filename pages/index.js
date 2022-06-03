import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    // cleanup --> component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      router.push("/feedback");
    }
  }, [counter]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="shadow-lg shadow-white border-2 p-16 h-60  w-60 rounded-full ">
        <p className="text-center text-white font-bold">Count Down</p>
        <p className="text-center text-[#FE595E] text-2xl mt-2">
          {counter} secs
        </p>
      </div>
    </div>
  );
}
