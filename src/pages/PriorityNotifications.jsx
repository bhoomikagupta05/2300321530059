import { notifications } from "../services/notificationApi";
import { Card, CardContent, Typography, Container } from "@mui/material";

function PriorityNotifications() {
  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const topNotifications = [...notifications]
    .sort((a, b) => priority[b.type] - priority[a.type])
    .slice(0, 3);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      {topNotifications.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>{item.type}</Typography>
            <Typography>{item.message}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default PriorityNotifications;