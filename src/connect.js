import { connect } from "react-redux";
import { increment, decrement, reset } from "./actionCreators";

const mapStateToProps = (state /*, ownProps*/) => {
  // ... computed data from state and optionally ownProps
};

const mapDispatchToProps = {
  // ... normally is an object full of action creators
};

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(Component);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
