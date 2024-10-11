import React, { useEffect, useState } from "react";
import { movieService } from "../../service/movieService";
import { Tabs } from "antd";

let ItemPhim = ({ phim }) => {
  return (
    <div className="flex space-x-3 mt-5">
      <img src={phim.hinhAnh} className="w-32" alt="" />
      <div>
        <h2>{phim.tenPhim}</h2>
        <div className="grid grid-cols-3 gap-3">
          {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, index) => {
            return <span key={index}>{lichChieu.ngayChieuGioChieu}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default function TabMovie() {
  const [danhSachRap, setDanhSachRap] = useState();
  useEffect(() => {
    movieService
      .layHeThongRap()
      .then((res) => {
        setDanhSachRap(res.data.content);
      })
      .catch((err) => {});
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  // heThongRap => lstCumRap =>danhSachPhim =>lstLichChieuTheoPhim
  let renderCumRap = (heThongRap) => {
    console.log("cumRap:", heThongRap);
    return heThongRap.lstCumRap.map((cumRap, index) => {
      return {
        key: index,
        label: (
          <div className="text-left w-80 text-lg  ">
            <h3 className="truncate">{cumRap.tenCumRap}</h3>
            <p className="truncate text-base text-gray-500">{cumRap.diaChi}</p>
          </div>
        ),
        children: (
          <div style={{ height: "500px" }} className="overflow-y-scroll">
            {cumRap.danhSachPhim.map((phim) => {
              return <ItemPhim phim={phim} key={phim.maPhim} />;
            })}
          </div>
        ),
      };
    });
  };
  let renderDachSachRap = () => {
    return danhSachRap?.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img src={heThongRap.logo} className="w-20" alt="" />,
        children: (
          <Tabs
            defaultActiveKey="1"
            items={renderCumRap(heThongRap)}
            onChange={onChange}
            tabPosition="left"
            style={{ height: "500px" }}
          />
        ),
      };
    });
  };
  return (
    <div className="container py-20">
      <Tabs
        defaultActiveKey="1"
        items={renderDachSachRap()}
        onChange={onChange}
        tabPosition="left"
        style={{ height: "500px" }}
      />
    </div>
  );
}
// tab antd
