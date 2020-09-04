import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";

interface IProp {
  activities: IActivity[];
}

export const ActivitiesDashboard: React.FC<IProp> = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities}></ActivityList>
      </Grid.Column>
    </Grid>
  );
};
