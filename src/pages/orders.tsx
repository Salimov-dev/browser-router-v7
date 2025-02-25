import { Button, Typography } from "antd";
import { useSearchParams } from "react-router";

const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "desc";
  return (
    <>
      <Typography.Title level={4}>
        Заказы, установлена сортировка: {sort}
      </Typography.Title>
      <Button onClick={() => setSearchParams({ sort: "asc" })}>
        Сортировать по возрастанию
      </Button>
    </>
  );
};

export default Orders;
