import React, { useEffect, useState } from "react";

export default function Main() {
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    handleResize(); // 초기 세팅
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-linear-to-t from-white-500 to-indigo-200"
      style={{ height: `calc(var(--vh, 1vh) * 100)` }}
    >
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="text-lg"> 📍 Toronto</div>
        <div className="text-sm mt-2"> Monday 1, May</div>
        <div className="mt-5 mb-5 w-[140px] bg-indigo-400 rounded-[20px] flex flex-col items-center justify-center p-3 shadow-lg">
          <div className="text-5xl">🌤️</div>
          <div className="text-4xl">22</div>
          <div className="text-xl">Cloudy</div>
        </div>
        <div className="w-[220px] flex items-center justify-around bg-gray-200 p-3 rounded-full">
          <div className="flex">
            <div>☔️</div>
            <div>30%</div>
          </div>
          <div className="flex">
            <div>💧</div>
            <div>30%</div>
          </div>
          <div className="flex">
            <div>💨</div>
            <div>30%</div>
          </div>
        </div>
      </div>

      <section className="mt-5 flex flex-col items-center justify-center">
        <div className="mt-1 flex gap-2">
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-300 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
          <div className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]">
            <p>9:00</p>
            <p>⛅️</p>
            <p>22</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-5">
        <div className="w-[300px] flex justify-between items-center bg-gray-200 p-3 rounded-[20px] shadow-lg">
          <div className="text-3xl ml-2">😩</div>
          <div>
            <p>오늘의 변덕 : 60점</p>
            <p>오전 비 + 오후 급격한 온도 하강</p>
          </div>
        </div>
      </section>
      <section className="mt-5 flex flex-col items-center justify-center">
        <p>Maybe you need ...</p>
        <div className="w-[300px] flex justify-around items-center mt-3">
          <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
            🌂
          </div>
          <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
            🕶️
          </div>
          <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
            🧢
          </div>
        </div>
      </section>
      <section className="mt-5 flex flex-col items-center justify-center">
        <div>Tomorrow</div>
        <div>내일 예상 변덕 점수 : 10점</div>
      </section>
    </div>
  );
}
