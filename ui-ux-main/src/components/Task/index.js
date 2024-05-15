import './style.css';
import Header from '../Header';
import Sider from '../Sider';


export const TaoTask = () => {
    return(
        <>
        <Sider/>
      {<Header title={"Tạo công việc"}/>}
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f0c7a9c027dd922fb0ab8e416c50c686f65b9d57075c3741601a829c38fa056?"
        class="back-arrow"/>
        <div class="task-container">
            <div class="task-name">Tên công việc</div>
            <input type="text" class="task-inputname"/>
            <div class="task-des">Mô tả công việc</div>
            <input type="text" class="task-inputdes"/>
            <div class="task-time">
                <div class="time-element">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a735fde2f36d3e161c65958bed42188ed9e2851910e924513c6e0b225fdc3770?"
                    class="time-icon"/>
                    <span class="time-name">Thời hạn</span>
                </div>
                <div class="task-time-container">
                    <time class="date">Hôm nay</time>
                    <time class="time">20:00</time>
                </div>
            </div>
            <div class="reminder-container">
                    <div class="reminder-icon">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/368410b9314b2d8877455ec4d6860be7c25a19729e2af7f5ab5d3c5f5610ba66?apiKey=25857e3055c34585afe307346766e12b&" alt="Reminder icon" />
                        <div class="reminder-text">Nhắc nhở</div>
                    </div>
                    <div class="reminder-settings">
                        <div class="reminder-days">Nhắc tôi trước</div>
                        <div class="reminder-dropdown">
                        <div class="reminder-dropdown-text">Trước 3 ngày</div>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06e6e95faa5393ad6a74047654880eb43d9715827774d0d0b61fe90900c5cb9a?apiKey=25857e3055c34585afe307346766e12b&" alt="Dropdown arrow" />
                        </div>
                    </div>
            </div>
            <div class="category-container">
                <div class="category-title">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0953acac8af1c6669b9fe0070ed8b6c289688a9c33745e336915c7a3987e9f?apiKey=25857e3055c34585afe307346766e12b&" alt="Category icon" class="category-icon" />
                    <div class="category-text">Danh mục</div>
                </div>
                <div class="category-tabs">
                    <div class="tab-theory">Lý thuyết</div>
                    <div class="tab-practice">Thực hành</div>
                    <div class="tab-extracurricular">Ngoại khóa</div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4369e8faa94cd0ac4f48b102e6eeaa4e1722ee77ddad851f1ffedb6205e6d240?apiKey=25857e3055c34585afe307346766e12b&" alt="Add new" class="addnew-icon" />
                </div>
            </div>
            <div class="priority-container">
                <div class="priority-icon">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b62224a631559d83a4843bb184c82df0d8b1ca98ba021049f2a686a0fad5c390?apiKey=25857e3055c34585afe307346766e12b&" alt="" class="priority-image" />
                    <div class="priority-text">Ưu tiên</div>
                </div>
                <div class="priority-level-container">
                    <div class="priority-level-text">Độ ưu tiên</div>
                    <div class="priority-level">Thấp</div>
                </div>
            </div>
            <button class="create-button">Tạo</button>
        </div>
        </>
    )

}
export default TaoTask;