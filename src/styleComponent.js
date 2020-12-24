import styled, { createGlobalStyle } from "styled-components";
import { Button, Card } from "@material-ui/core";

// Titre en tete de page
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  padding: 20px;
`;

// Bouton Add Task et Change Task
export const MyButton = styled(Button)`
  margin: 2px !important;
  box-shadow: 1px 1px 1px gray;
  background-color: #bbbea8 !important;
`;

// Bouton Delete Task et Cancel Edit
export const DeleteOrCancelButton = styled(MyButton)`
  background-color: #cd000d !important;
`;

// Bouton Edit Task
export const EditButton = styled(MyButton)`
  background-color: #00b0cd !important;
`;

// Position des boutons dans les tâches
export const ButtonPos1 = styled.div`
  display: flex;
  justify-content: flex-end !important;
`;

// Contenu de la Card
export const CardContent = styled(Card)`
  margin: 10px;
  padding: 10px;
  width: 70vw;
  font-size: 20px;
`;

// Tache en mode Edit
export const CardEditMode = styled(CardContent)`
  background-color: #9eff8f !important;
`;

// Comportement des Cards
export const CardSize = styled.div`
  height: "auto";
  margin: 3px 2vw 3px 2vw;
  display: flex;
  justify-content: center;
`;

// Position des Inputs pour ajouter une tache
export const TaskInput = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 10vh;
`;

// Texte "tâches à réaliser :"
export const TaskToDo = styled.div`
  font-size: 15px;
  color: #999999;
  display: flex;
  justify-content: right;
`;

// Nombre de tâches
export const TasksNumber = styled(TaskToDo)`
  color: inherit;
  font-size: 30px;
  border-bottom: 1px solid #eeeeee;
  align-items: flex-end;
`;

// Box de la liste des tâches
export const BorderTasks = styled.div`
  border: 1px solid black;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 1px 1px 1px darkgrey;
  padding: 15px;
  margin: 20px 20vw 20px 10vw;
  background-color: #f8fef6;
`;

// CSS de la page
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: #eeeeee;
    color: #3c4858;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  h1{
    margin: 0;
  }

  small{
    font-size: 65%;
    color: #777777;
  }
`;
