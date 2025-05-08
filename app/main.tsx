import { useEffect, useState } from "react";
import axios from "axios";
import HourWeather from "./components/hour-weather";
import { CurrentWeather } from "./components/current-weather";
import RecommendItems from "./components/recommend-items";

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
        <CurrentWeather />
      </div>

      <section className="mt-5 flex flex-col items-center justify-center">
        <HourWeather />
      </section>

      <section className="flex flex-col items-center justify-center mt-8">
        <div className="w-[300px] flex justify-between items-center bg-gray-100 p-3 rounded-[20px] shadow-lg">
          <div className="text-3xl ml-2">😩</div>
          <div>
            <p>오늘의 변덕 : 60점</p>
            <p>오전 비 + 오후 급격한 온도 하강</p>
          </div>
        </div>
      </section>
      <section className="mt-5 flex flex-col items-center justify-center">
        <RecommendItems />
      </section>
      <section className="mt-5 flex flex-col items-center justify-center">
        <div>Tomorrow</div>
        <div>내일 예상 변덕 점수 : 10점</div>
      </section>
    </div>
  );
}
