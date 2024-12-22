// Create an element with React
const parent = React.createElement(
    "div", // Type of element
    { id: "Parent" }, // Props
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")
    ] // Child element
);

// Initialize the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the parent element
root.render(parent);