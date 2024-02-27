import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const Catproduct = ({ products, onSelectCategory }) => {
  const [selectedCat, setSelectedCat] = useState(null);

  const handleCatChange = (value) => {
    setSelectedCat(value);
    onSelectCategory(value); // เรียกใช้งานฟังก์ชันที่ถูกส่งเข้ามาเพื่อส่งค่า Category ไปยัง ProductList.js
  };

  return (
    <div>
      <Select
        defaultValue="Select a Category"
        style={{ width: 200, marginBottom: 8 }}
        onChange={handleCatChange}
      >
        <Option value={null}>All</Option>
        {Array.from(new Set(products.map((product) => product.cat))).map(
          (cat, index) => (
            <Option key={index} value={cat}>
              {cat}
            </Option>
          )
        )}
      </Select>
    </div>
  );
};

export default Catproduct;
