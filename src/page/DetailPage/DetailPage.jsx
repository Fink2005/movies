import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import { http } from "../../service/config";
import { useParams } from "react-router-dom";
import { Progress } from "antd";
export default function DetailPage() {
  // DUNG useParams de lay id tu url
  // goi api lay chi tiet phim thong qua id vua lay
  let { id } = useParams();
  // thenc => then catchj
  const [detailMovie, setdetailMovie] = useState({});

  useEffect(() => {
    http
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        console.log(result.data.content);
        setdetailMovie(result.data.content);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <Header />
      <div className="flex space-x-5 items-center">
        <img className="w-96" src={detailMovie.hinhAnh} alt="" />
        <Progress
          type="circle"
          percent={detailMovie.danhGia * 10}
          size={80}
          strokeWidth={10}
          format={() => (
            <span className="text-base font-medium text-blue-400">
              {detailMovie.danhGia}/ 10 điểm
            </span>
          )}
        />
      </div>
    </div>
  );
}
