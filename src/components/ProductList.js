import React, { useState, useEffect } from "react";
import { Card, Layout, Flex, Pagination } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, theme, Input, Menu, Space } from "antd";
import Catproduct from "../components/Catproduct";

const { Header, Sider, Content, Footer } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 100,
  paddingInline: 64,
  lineHeight: "64px",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 500,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};
const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "black",
  paddingTop: 50,
};
const layoutStyle = {
  borderRadius: 0,
  overflow: "hidden",
  width: "calc(100% - 0px)",
  maxWidth: "100%",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#fff",
};

function getItem(label, key, icon, children, type, style) {
  return {
    key,
    icon,
    children,
    label,
    type,
    style,
    // เพิ่มพารามิเตอร์..
  };
}

const { Search } = Input;

const { Meta } = Card;

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState(""); // เพิ่ม state เพื่อเก็บข้อความที่ใช้สำหรับการค้นหา

  const handleCategorySelect = (selectedCat) => {
    if (!selectedCat) {
      setFilteredProducts(products); // กรณีเลือก All ให้แสดงสินค้าทั้งหมด
    } else {
      const filtered = products.filter(
        (product) => product.cat === selectedCat
      );
      setFilteredProducts(filtered); // กรณีเลือก Category ให้แสดงเฉพาะสินค้าใน Category นั้น
    }
  };

  const handleSearch = (value) => {
    setSearchText(value); // เมื่อมีการค้นหาเกิดขึ้น อัพเดต state ที่เก็บข้อความที่ใช้สำหรับการค้นหา
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered); // อัพเดตสินค้าที่ถูกกรองโดยใช้ชื่อสินค้าที่มีความสอดคล้องกับ searchText
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    getItem(
      "Select your Catagory",
      "sub1",
      <FilterOutlined />,
      [
        getItem(
          <Catproduct
            products={products}
            onSelectCategory={handleCategorySelect}
          />,
          "5",
          null,
          null,
          null,
          {
            color: "#ffffff",
          }
        ),
      ],
      null,
      null,
      { color: "#ffffff" }
    ),
  ];

  return (
    <div>
     
      <Flex wrap="wrap" gap="middle">
        <Layout style={layoutStyle}>
          <Layout>
            <Sider
              width="20%"
              style={siderStyle}
              trigger={null}
              collapsible
              collapsed={collapsed}
              
            >
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                style={{ backgroundColor: "black" }}
                inlineCollapsed={collapsed}
                items={items}
              />
            </Sider>

            <Layout>
              <Header style={{ padding: 0, background: colorBgContainer }}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                    
                  }}
                />
                <Search
                  placeholder="Search product.."
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{
                    width: 250,
                    float: "right",
                    padding: 15,
                  }}
                />
                 Our Adventure Packages Around the World
              </Header>

              <Content
                style={{
                  textAlign: "center",
                  minHeight: 1500,
                  lineHeight: "120px",
                  color: "#fff",
                  backgroundColor: "white",
                }}
              >
                <Flex wrap="wrap" gap="0" style={{ padding: 50 }}>
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      hoverable
                      style={{ width: 250, margin: 20 }}
                      cover={<img alt={product.name} src={product.imageSrc} />}
                    >
                      <Meta
                        title={product.name}
                        description={product.description}
                      />
                      <p>Price: {product.price}</p>
                    </Card>
                  ))}
                </Flex>
              </Content>

              <Footer style={{ ...footerStyle, textAlign: "center" }}>
                <Pagination
                  defaultCurrent={6}
                  total={200}
                  style={{ display: "inline-block" }}
                />
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
};

export default ProductList;
