import { useState } from "react";
import { notifications } from "../services/notificationApi";
import Filter from "../components/Filter";

import {
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

function Notifications() {
  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.type === filter
        );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Campus Notification System
      </Typography>

      <Filter
        value={filter}
        onChange={setFilter}
      />

      {filteredNotifications.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">
              {item.title}
            </Typography>

            <Typography color="primary">
              {item.type}
            </Typography>

            <Typography>
              {item.message}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Notifications;