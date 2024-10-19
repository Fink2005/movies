import { http } from './config';
export let movieService = {
  layDanhSachPhim: () => {
    return http.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  layChiTietPhim: (maPhim) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  layHeThongRap: () => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`);
  },
};

export let adminService = {
  layDanhSachUser: () => {
    return http.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00');
  },
  xoaNguoiDung: (taiKhoan) => {
    // method DELETE
    return http.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    );
  },
};
