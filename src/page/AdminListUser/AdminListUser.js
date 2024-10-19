import React, { useEffect, useState } from 'react';
import { adminService } from '../../service/movieService';
import { Button, message, Table, Tag } from 'antd';

export default function AdminListUser() {
  const [listUser, setListUser] = useState([]);
  let fetchListUser = () => {
    adminService
      .layDanhSachUser()
      .then((res) => {
        setListUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchListUser();
  }, []);
  let handleDelete = async (taiKhoan) => {
    try {
      let result = await adminService.xoaNguoiDung(taiKhoan);
      console.log('result:', result);
      message.success('Xoá thành công');
      // gọi lại  api lấy danh sách user sau khi xoá thành công
      fetchListUser();
    } catch (error) {
      console.log('error:', error);
      message.error('Xoá thất bại');
    }
  };
  const columns = [
    {
      title: 'Tên khách hàng',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Loại khách hàng',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      render: (dataIndex, dataObject) => {
        if (dataObject.maLoaiNguoiDung === 'KhachHang') {
          return <Tag color="blue">Khách hàng</Tag>;
        } else {
          return <Tag color="red">Quản trị</Tag>;
        }
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, dataObject) => {
        return (
          <div>
            <Button
              onClick={() => {
                handleDelete(dataObject.taiKhoan);
              }}
              type="primary"
              className="bg-red-600"
            >
              Xoá
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <Table dataSource={listUser} columns={columns} />
    </div>
  );
}
