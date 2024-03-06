import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventById } from "@/server/event-create";
import React from "react";
import AddCertificate from "../_components/AddCertificate";

const EventDetails = async ({ params }: { params: { id: string } }) => {
  const event = await getEventById(params.id);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{event?.title}</CardTitle>
          <div className="text-[0.8rem] text-muted-foreground flex justify-between items-center">
            <p>{event?.location}</p>
            <p>{event?.date.toLocaleDateString()}</p>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm">{event?.description}</p>
          <AddCertificate />
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetails;