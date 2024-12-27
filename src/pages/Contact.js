import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลว่ากรอกครบหรือยัง
    if (!formData.name || !formData.email || !formData.message) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // หากข้อมูลครบถ้วน ก็ส่งข้อมูล (ที่นี่คุณอาจจะทำการส่งข้อมูลไปที่เซิร์ฟเวอร์)
    setError(''); // ลบข้อความเตือน
    alert('ข้อมูลถูกส่งเรียบร้อย');
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <h1>ติดต่อเรา</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* แสดงข้อความเตือน */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
