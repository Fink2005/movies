import React, { useEffect, useState } from 'react';
import { http } from '../../service/config';
import { Card, Popover } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';
import { movieService } from '../../service/movieService';
import { useSelector } from 'react-redux';

export default function ListMovie() {
  // chuyển hướng trang
  let navigate = useNavigate();
  let user = useSelector((state) => state.userSlice.dataLogin);

  // usf
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    movieService
      .layDanhSachPhim()
      .then((result) => {
        console.log('result', result.data.content);
        setMovieArr(result.data.content);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  let renderListMovies = () => {
    if (user) {
      return movieArr.map((movie) => {
        return (
          <Card
            onClick={() => {
              navigate(`/detail/${movie.maPhim}`);
            }}
            className="hover:bg-blue-600 hover:scale-90 duration-300 transition"
            key={movie.maPhim}
            hoverable
            cover={
              <img
                className="h-32 object-cover"
                alt="example"
                src={movie.hinhAnh}
              />
            }
          >
            <Meta
              title={<Popover content={movie.tenPhim}>{movie.tenPhim}</Popover>}
            />
          </Card>
        );
      });
    }
  };
  return (
    <div className="grid grid-cols-6 gap-5 container">{renderListMovies()}</div>
  );
}
