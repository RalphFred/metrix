import { recentOrders } from "@/constants"
import Order from "./Order"

const Recent = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="font-semibold mb-2">Recent Orders</h3>

      {recentOrders.map((order, index) => (
        <Order
          key={index}
          imgUrl={order.imgUrl}
          name={order.name}
          price={order.price} 
          date={order.date}
          status={order.status}
        />
      ))}
    </div>
  )
}

export default Recent