
import Container from "@/components/Container";
import React from "react";
import { auth } from '@clerk/nextjs/server'

const OrdersPage = async () => {

    await auth.protect()

  return (
    <div>
      <Container className="py-10">
            <p>hello orders</p>
      </Container>
    </div>
  );
};

export default OrdersPage;