import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonMenuButton,
  //  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useContext } from "react";

import CoursesContext from "../data/courses-context";

const AllGoals: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);

  const goals = coursesCtx.courses
    .filter((course) => {
      return course.included;
    })
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((goalArray, nestedGoals) => {
      let updatedGoalArray = goalArray;

      for (const goal of nestedGoals) {
        updatedGoalArray = updatedGoalArray.concat(goal);
      }

      return updatedGoalArray;
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/*
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          */}
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {goals.length === 0 && (
          <h2 className="ion-text-center">No goals found!</h2>
        )}
        {goals.length > 0 && (
          <IonList>
            {goals.map((goal) => (
              <IonItem key={goal.id}>
                <IonLabel>
                  <h2>{goal.text}</h2>
                  <p>{goal.courseTitle}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
