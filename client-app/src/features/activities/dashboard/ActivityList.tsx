import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProp {
  activities: IActivity[];
}

export const ActivityList: React.FC<IProp> = ({ activities }) => {
  return (
    <Segment clearing>
      <Item.Group divied>
        {activities.map((activity) => (
          <Item>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>Date</Item.Meta>
              <Item.Description>
                <div>Description</div>
                <div>City</div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="view" color="blue" />
                <Label basic content="Category" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
