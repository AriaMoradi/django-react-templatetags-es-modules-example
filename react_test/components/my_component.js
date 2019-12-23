import ChildComponent from "./child_component.js";
import React from "https://unpkg.com/es-react/dev/react.js";

export default class MyComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>My Component</h1>
                <h2>props: {this.props.example_data}</h2>
                <ChildComponent/>
            </React.Fragment>
        )

    }
}
