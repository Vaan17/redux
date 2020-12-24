import AddTodo from "./AddTodo";
import ViewList from "./ViewList";
import { Title, Background, GlobalStyle } from "./styleComponent";
import { Grid } from "@material-ui/core";

const TodoApp = () => {
  return (
    <div>
      <Title>Todo List</Title>
      <Grid container>
        <Grid item sm={4}>
          <AddTodo />
        </Grid>
        <Grid item sm={8}>
          <ViewList />
        </Grid>
      </Grid>
      <GlobalStyle />
    </div>
  );
};

export default TodoApp;
