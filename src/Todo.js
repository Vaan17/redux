//... other imports
import {connect} from "react-redux";
import {toggleTodo} from "./actions";

const Todo = // ... component implementation

export default connect(
    null,
    {toggleTodo}
)(Todo);