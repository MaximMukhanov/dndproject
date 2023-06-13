import { Layout, Typography } from "antd";

function Header() {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Layout.Header className="header">
        <Typography.Title level={2}>Dnd damage calculator</Typography.Title>
      </Layout.Header>
    </Layout>
  );
}
export default Header;
