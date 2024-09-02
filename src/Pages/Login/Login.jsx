// src/Pages/Login/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Thêm CSS nếu cần

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Xử lý đăng ký
      if (email === '' || password === '' || confirmPassword === '') {
        setError('Tất cả các trường đều bắt buộc.');
      } else if (password !== confirmPassword) {
        setError('Mật khẩu và xác nhận mật khẩu không khớp.');
      } else {
        setError('');
        console.log('Đăng ký thành công:', { email, password });
        // Di chuyển đến trang đăng nhập sau khi đăng ký
        setIsSignUp(false); // Chuyển sang chế độ đăng nhập
        setEmail(''); // Xóa email và mật khẩu
        setPassword('');
        setConfirmPassword('');
        setError('');
        // Thông báo hoặc xử lý khác nếu cần
      }
    } else {
      // Xử lý đăng nhập
      if (email === '' || password === '') {
        setError('Email và mật khẩu không được để trống.');
      } else {
        setError('');
        console.log('Đăng nhập thành công:', { email, password });
        // Di chuyển đến trang quản lý sau khi đăng nhập
        navigate('/qlmt', { state: { email } });
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Đăng Ký' : 'Đăng Nhập'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {error && <p className="error">{error}</p>}
        <button type="submit">{isSignUp ? 'Đăng Ký' : 'Đăng Nhập'}</button>
      </form>
      <div className="toggle">
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký'}
        </button>
      </div>
    </div>
  );
};

export default Login;
