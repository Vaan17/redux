//... other imports
import {connect} from "react-redux";
import {getTodos, getTodosByVisibilityFilter} from "./selectors";

const TodoList = //... UI component implementation

const mapStateToProps = state => {
    const {visibilityFilter} = state
    const todos = getTodosByVisibilityFilter(state, visibilityFilter)
    return {todos}
}

export default connect(mapStateToProps)(TodoList);