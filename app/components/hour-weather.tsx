const HourWeather = () => {
  const data = [
    {
      id: 1,
      time: "9:00",
      icon: "⛅️",
      temp: 22,
    },
    {
      id: 2,
      time: "10:00",
      icon: "☀️",
      temp: 25,
    },
    {
      id: 3,
      time: "10:00",
      icon: "☀️",
      temp: 25,
    },
    {
      id: 4,
      time: "10:00",
      icon: "☀️",
      temp: 25,
    },
    {
      id: 5,
      time: "10:00",
      icon: "☀️",
      temp: 25,
    },
    {
      id: 6,
      time: "10:00",
      icon: "☀️",
      temp: 25,
    }
  ];

  return (
    <div className="mt-1 flex gap-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[60px] text-center bg-indigo-200 p-2 rounded-[20px]"
        >
          <p>{item.time}</p>
          <p>{item.icon}</p>
          <p>{item.temp}</p>
        </div>
      ))}
    </div>
  );
};

export default HourWeather;
