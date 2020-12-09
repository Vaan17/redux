//... other imports
import {connect} from "react-redux";
import {setFilter} from "./actions";

const VisibilityFilters = // ... component implementation

const mapStateToProps = state => {
    return { activeFilter: state.VisibilityFilter };
};

export default connect(
    mapStateToProps,
    {setFilter}
)(VisibilityFilters);