import { Typography } from "antd";
import { useParams } from "react-router";

const MyProfile = () => {
  const { userId } = useParams();
  return <Typography.Title level={4}>Мой профиль {userId}</Typography.Title>;
};

export default MyProfile;
