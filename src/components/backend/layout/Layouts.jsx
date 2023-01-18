import React from "react";
import Header from "../../frontend/common/header/Header";
import { Outlet } from "react-router-dom";
import Leftsidebar from "../common/LeftSideBar/Leftsidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
const Layouts = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3990,
      pv: 4800,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3390,
      pv: 3600,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3090,
      pv: 4000,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 4590,
      pv: 5000,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3790,
      pv: 4000,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3090,
      pv: 3500,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="container m-auto py-10 px-5 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <Leftsidebar />
            <div className="col-span-1 md:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                <div className="shadow-md rounded-lg p-5 bg-dashcardBg">
                  <h2 className="text-cardHead font-bold text-xl">05</h2>
                  <p className="text-grayDark">Total Accounts</p>
                </div>
                <div className="shadow-md rounded-lg p-5 bg-dashcardBg">
                  <h2 className="text-cardHead font-bold text-xl">05</h2>
                  <p className="text-grayDark">Total Accounts</p>
                </div>
                <div className="shadow-md rounded-lg p-5 bg-dashcardBg">
                  <h2 className="text-cardHead font-bold text-xl">05</h2>
                  <p className="text-grayDark">Total Accounts</p>
                </div>
                <div className="shadow-md rounded-lg p-5 bg-dashcardBg">
                  <h2 className="text-cardHead font-bold text-xl">05</h2>
                  <p className="text-grayDark">Total Accounts</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                <div className="col-span-1 md:col-span-4">
                  <div className="rounded-lg mb-10 shadow-lg bg-white p-10">
                    <div className="mb-10">
                      <h2 className="text-grayDark text-xl">
                        This Year Overview
                      </h2>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="rounded-lg shadow-lg bg-white p-10">
                    <div className="mb-10">
                      <h2 className="text-grayDark text-xl">
                        This Year Overview
                      </h2>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 shadow-lg p-5 rounded-lg">
                  <div className="mb-10">
                    <h3 className=" text-xl text-grayDark font-semibold">
                      My Cards
                    </h3>
                  </div>
                  <div className="mb-10">
                    <div className="rounded-t-lg relative p-5 flex justify-between bg-cardAcBg">
                      <div>
                        <h2>Jhon</h2>
                        <p>AC: 90876545123</p>
                      </div>
                      <div>
                        <div className="w-6 h-6 rounded-full relative bg-red-500"></div>
                        <div className="w-6 h-6 top-4 right-7 rounded-full absolute bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="rounded-b-lg relative p-5 flex justify-between bg-balaneBg">
                      <div>
                        <h2>$ 23,45,000</h2>
                        <p>Total balance</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="rounded-t-lg relative p-5 flex justify-between bg-cardAcBg">
                      <div>
                        <h2>Jhon</h2>
                        <p>AC: 90876545123</p>
                      </div>
                      <div>
                        <div className="w-6 h-6 rounded-full relative bg-red-500"></div>
                        <div className="w-6 h-6 top-4 right-7 rounded-full absolute bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="rounded-b-lg relative p-5 flex justify-between bg-balaneBg">
                      <div>
                        <h2>$ 23,45,000</h2>
                        <p>Total balance</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="rounded-t-lg relative p-5 flex justify-between bg-cardAcBg">
                      <div>
                        <h2>Jhon</h2>
                        <p>AC: 90876545123</p>
                      </div>
                      <div>
                        <div className="w-6 h-6 rounded-full relative bg-red-500"></div>
                        <div className="w-6 h-6 top-4 right-7 rounded-full absolute bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="rounded-b-lg relative p-5 flex justify-between bg-balaneBg">
                      <div>
                        <h2>$ 23,45,000</h2>
                        <p>Total balance</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-t-lg relative p-5 flex justify-between bg-cardAcBg">
                      <div>
                        <h2>Jhon</h2>
                        <p>AC: 90876545123</p>
                      </div>
                      <div>
                        <div className="w-6 h-6 rounded-full relative bg-red-500"></div>
                        <div className="w-6 h-6 top-4 right-7 rounded-full absolute bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="rounded-b-lg relative p-5 flex justify-between bg-balaneBg">
                      <div>
                        <h2>$ 23,45,000</h2>
                        <p>Total balance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
