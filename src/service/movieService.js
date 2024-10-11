import { http } from "./config";
export let movieService = {
  layDanhSachPhim: () => {
    return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  layChiTietPhim: (maPhim) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  layHeThongRap: () => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`);
  },
};

//   api /
//   QuanLyRap /
//   LayThongTinLichChieuHeThongRap;
