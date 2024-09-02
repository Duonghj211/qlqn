// src/Pages/Qlnd/Qlnd.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Qlnd.css';
import user_icon from '../../Assets/user.png';

const Qlnd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'user@example.com';

  const handleLogout = () => {
    // Xử lý đăng xuất (có thể là xóa token, cập nhật state toàn cục, v.v.)
    // Sau đó, điều hướng về trang đăng nhập
    navigate('/');
  };

  const handleManageComputers = () => {
    // Điều hướng đến trang quản lý máy tính
    navigate('/qlmt', { state: { email } });
  };

  return (
    <div className='qlnd'>
      <div className="qlnd-left">
        <div className="user">
          <img src={user_icon} alt="User Icon" />
          <p>{email}</p>
        </div>
        <ul>
          <li onClick={handleManageComputers}>Quản lý máy tính</li>
          <li className='key'>Quản lý người dùng</li>
          <li><button onClick={handleLogout}>Đăng xuất</button></li>
        </ul>
      </div>
      <div className="qlnd-right">
        <h2>Danh sách người dùng</h2>
        {/* Mẫu danh sách người dùng */}
        <div className="user-card">
          <h3>Người dùng 1</h3>
          <p>Email: user1@example.com</p>
        </div>
        <div className="user-card">
          <h3>Người dùng 2</h3>
          <p>Email: user2@example.com</p>
        </div>
        {/* Thêm các thẻ người dùng khác tại đây */}
      </div>
    </div>
  );
}

export default Qlnd;
