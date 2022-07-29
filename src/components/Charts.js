import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Charts = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 4080,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const [isActive, setIsActive] = useState(0);
  const onMouseOver = (data: any, index: number) => setIsActive(index);

  return (
    <div className="flex items-center">
      <div className="2xl:ml-20 m-12">
        <h1 className="font-bold text-gray-400">Task in Progress</h1>
        <div className="flex items-center mt-3">
          <p className="text-2xl font-bold text-orange-600 mb-1">210</p>

          <p className="ml-10 bg-gray-300 pl-2 pr-8  rounded-xl">23</p>
          <div className="ml-[-20px] text-gray-600">
            <BsFillArrowUpRightCircleFill />
          </div>
        </div>
        <p className="font-bold text-gray-400 mt-2">Current Month</p>
      </div>
      <div>
        <ResponsiveContainer width={170} height={100} className="drop-shadow-xl">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="rgba(234, 88, 12, .2)" onMouseOver={onMouseOver}>
              {data.map((item, index) => (
                <Cell cursor="pointer" key={index} fill={index === isActive ? "rgb(234 88 12)" : "rgba(234, 88, 12, .2)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2 */}
      <div className="m-12">
        <h1 className="font-bold text-violet-400">Task Completed</h1>
        <div className="flex items-center mt-3">
          <p className="text-2xl font-bold text-violet-700 mb-1">185</p>

          <p className="ml-10 bg-gray-300 pl-2 pr-8  rounded-xl">45</p>
          <div className="ml-[-20px] text-violet-700">
            <BsFillArrowUpRightCircleFill />
          </div>
        </div>
        <p className="font-bold text-gray-400 mt-2">Current Month</p>
      </div>
      <div>
        <ResponsiveContainer width={170} height={100} className="drop-shadow-xl">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="rgba(234, 88, 12, .2)" onMouseOver={onMouseOver}>
              {data.map((item, index) => (
                <Cell cursor="pointer" key={index} fill={index === isActive ? "rgb(109 40 217)" : "rgba(234, 88, 12, .2)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3 */}
      <div className="m-12">
        <h1 className="font-bold text-lime-600">Monthly Tasks Summary</h1>
        <div className="flex items-center mt-3">
          <p className="text-2xl font-bold text-lime-600 mb-1">1.240</p>

          <p className="ml-10 bg-gray-300 pl-2 pr-8  rounded-xl">145</p>
          <div className="ml-[-20px] text-lime-500">
            <BsFillArrowUpRightCircleFill />
          </div>
        </div>
        <p className="font-bold text-gray-400 mt-2">Current Month</p>
      </div>
      <div>
        <ResponsiveContainer width={170} height={100} className="drop-shadow-3xl">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="rgba(234, 88, 12, .2)" onMouseOver={onMouseOver}>
              {data.map((item, index) => (
                <Cell cursor="pointer" key={index} fill={index === isActive ? "rgb(132 204 22)" : "rgba(234, 88, 12, .2)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
