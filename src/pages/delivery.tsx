import { Button, Typography } from "antd";
import { useNavigate } from "react-router";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography.Title level={4}>Доставка</Typography.Title>
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </>
  );
};

export default Delivery;
