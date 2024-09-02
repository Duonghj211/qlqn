// src/Pages/Qlmt/Qlmt.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Qlmt.css';
import user_icon from '../../Assets/user.png';
import com from '../../Assets/com.jpg';

const Qlmt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'user@example.com';

  const handleLogout = () => {
    // Xử lý đăng xuất và điều hướng về trang đăng nhập
    navigate('/');
  };

  const handleqlnd = () => {
    // Điều hướng đến trang quản lý người dùng
    navigate('/qlnd', { state: { email } });
  };

  return (
    <div className='qlmt'>
      <div className="qlmt-left">
        <div className="user">
          <img src={user_icon} alt="User Icon" />
          <p>{email}</p>
        </div>
        <ul>
          <li className='key' onClick={() => {}}>Quản lý máy tính</li>
          <li onClick={handleqlnd}>Quản lý người dùng</li>
          <li><button onClick={handleLogout}>Đăng xuất</button></li>
        </ul>
      </div>
      <div className="qlmt-right">
        {[...Array(30)].map((_, index) => {
          const status = (index % 2 === 0) ? 'Close' : 'Open';
          return (
            <div className={`may1 ${status.toLowerCase()}`} key={index}>
              <img src={com} alt={`Computer ${index + 1}`} />
              <p>{status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Qlmt;
