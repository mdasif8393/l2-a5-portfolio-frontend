/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const DashboardMessageCard = ({ message }: any) => {
  return (
    <div>
      <Card className="basis-2/4">
        <CardHeader>
          <CardTitle>{message?.name}</CardTitle>
          <CardDescription>Email: {message?.email}</CardDescription>
          <CardDescription>
            Contact Number: {message?.contactNumber}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Message: {message?.message}</p>
        </CardContent>{" "}
      </Card>
    </div>
  );
};

export default DashboardMessageCard;
