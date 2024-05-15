import './style.css';
import Header from '../Header';
import Sider from '../Sider';

export const TaoKPI = () => {
    return(
        <>
        <Sider/>
        {<Header title={"Tạo KPI"}/>}
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d6efce4ca5812aa65c9d111567caf6edef8068cf05f2adadfff12077af998d?apiKey=25857e3055c34585afe307346766e12b&"
            class="back-arrow"
        />
        <div class="kpi-container">
            <div class="kpi-title">
                <h1 class="title-text">Tên KPI</h1>
                <input type="text" class="title-input"></input>
            </div>
            <div class="kpi-des">
                <h1 class="des-text">Mô tả KPI</h1>
                <input type="text" class="des-input"></input>
            </div>
            <div class="start-date-container">
                <h2 class="date-label">Ngày bắt đầu :</h2>
                <div class="date-picker">
                    <div class="date-picker-icon-wrapper">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf685251bd53e234c3390c5384cdb51c6ccc6d66dbed2652cad98976ca7c1cd7?apiKey=25857e3055c34585afe307346766e12b&" alt="Calendar icon" class="date-picker-icon" />
                    <button class="date-picker-button">dd/mm/yy</button>
                    </div>
                    <input type="time" value="20:00" class="date-picker-time-input" />
                </div>
            </div>
            <div class ="end-date-container">
                <h2 class="date-label">Ngày kết thúc :</h2>
                <div class="date-picker">
                    <div class="date-picker-icon-wrapper">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf685251bd53e234c3390c5384cdb51c6ccc6d66dbed2652cad98976ca7c1cd7?apiKey=25857e3055c34585afe307346766e12b&" alt="Calendar icon" class="date-picker-icon" />
                    <button class="date-picker-button">dd/mm/yy</button>
                    </div>
                    <input type="time" value="20:00" class="date-picker-time-input" />
                </div>
            </div>
            <div class="category-container">
                <div class="category-label">Danh mục :</div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cafb510017250309f33923e1c00f5848baf01a72eb6fde1f4e20a7a04898150?apiKey=25857e3055c34585afe307346766e12b&" alt="Category icon" class="category-icon" />
            </div>
            <div class="category-title-container-practice">
                <div class="category-title">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/38980b7fc9a15032e44c972bdd101e08c4c3d5c7964620b60707ed364b9fa23e?apiKey=25857e3055c34585afe307346766e12b&" alt="Category icon" class="category-icon" />
                    <div class="category-text">Thực hành</div>
                </div>
                <div class="time-container">
                    <div class="time-box">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2e9e7d52937af7908c5506701f39bea215074680ada2d2a5518a9d37a34af?apiKey=25857e3055c34585afe307346766e12b&" alt="Clock icon" class="clock-icon" />
                        <div class="time-text">Giờ</div>
                    </div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac7183943a5a20387bf40005af5553e8df3654ac75edd4046b1e9c4030731463?apiKey=25857e3055c34585afe307346766e12b&" alt="Map marker icon" class="map-marker-icon" />
                </div>
            </div>
            <div class="category-title-container-theory">
                <div class="category-title">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/38980b7fc9a15032e44c972bdd101e08c4c3d5c7964620b60707ed364b9fa23e?apiKey=25857e3055c34585afe307346766e12b&" alt="Category icon" class="category-icon" />
                    <div class="category-text">Lý thuyết</div>
                </div>
                <div class="time-container">
                    <div class="time-box">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2e9e7d52937af7908c5506701f39bea215074680ada2d2a5518a9d37a34af?apiKey=25857e3055c34585afe307346766e12b&" alt="Clock icon" class="clock-icon" />
                        <div class="time-text">Giờ</div>
                    </div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac7183943a5a20387bf40005af5553e8df3654ac75edd4046b1e9c4030731463?apiKey=25857e3055c34585afe307346766e12b&" alt="Map marker icon" class="map-marker-icon" />
                </div>
            </div>
            <button class="create">Tạo</button>
        </div>
        </>
    )

}

export default TaoKPI;