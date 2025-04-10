import { Card } from "@/app/components/card";
import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <Card>
      <div>Notification</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}

export default Notifications;
