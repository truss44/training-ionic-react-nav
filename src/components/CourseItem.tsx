import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import React from "react";

const CourseItem: React.FC<{
  title: string;
  enrollmentDate: Date;
  id: string;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>
          Enrolled on{" "}
          {props.enrollmentDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-text-right">
          <IonButton
            fill="clear"
            color="secondary"
            routerLink={`/courses/${props.id}`}
          >
            View Course Goals
          </IonButton>
        </div>
        {/*
      <IonButton
        fill="clear"
        color="secondary"
        onClick={changePageHandler}
      >
        View Course Goals
      </IonButton>
      */}
      </IonCardContent>
    </IonCard>
  );
};

export default CourseItem;
