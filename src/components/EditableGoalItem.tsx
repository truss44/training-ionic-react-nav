import {
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { trash, create } from "ionicons/icons";
import React from "react";

const EditableGoalItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  text: string;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={props.onStartDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem
        lines="full"
        //button
        //onClick={props.onStartDelete}
      >
        <IonLabel>{props.text}</IonLabel>
        {/*
  <IonButton
    slot="end"
    fill="clear"
    color="dark"
    //onClick={props.onStartEdit}
  >
    <IonIcon icon={create} slot="icon-only" />
  </IonButton>
  */}
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={props.onStartEdit}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
