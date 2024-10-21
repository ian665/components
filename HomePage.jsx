import React from 'react';
import './HomePage.css'; // 引入自定義的CSS文件

function HomePage() {
  return (
    <div className="homepage-container">

      <header className="header">
        <div class="header-inner">
          <a class="header-logo" href='localhost:3000/home'><img src="\images\logo.jpg" alt='logo.jpg'></img></a>
          <div class="header-site-menu">
            <nav class="site-menu">
                <ul>
                  <li>首頁</li>
                  <li>選課規則</li>
                  <li>通知</li>
                  <li>私訊</li>
                </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="module-container">
        {/* 左側個人資訊模塊 */}
        <div className="module personal-info">
          <h2>個人資訊</h2>
          <p>姓名: 張三</p>
          <p>學號: 2023101234</p>
          <p>已修學分: 45</p>
          <p>目前學期: 第5學期</p>
        </div>

        {/* 中間課程檢索模塊 */}
        <div className="module course-search">
          <h2>課程檢索</h2>
          <input type="text" placeholder="搜尋課程名稱或代碼" className="search-input" />
          <button className="search-button">搜尋</button>
          <p>輸入課程名稱或代碼來查看可選課程。</p>
        </div>

        {/* 右側個人課表模塊 */}
        <div className="module course-schedule">
          <h2>已選課程與課表</h2>
          <ul className="selected-courses">
            <li>微積分 (星期一 09:00 - 10:30)</li>
            <li>計算機科學基礎 (星期三 14:00 - 16:00)</li>
            <li>數據結構 (星期五 10:00 - 12:00)</li>
          </ul>
          <button className="edit-schedule">編輯課表</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
