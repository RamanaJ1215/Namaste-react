import React from "react";
import ReactDOM from "react-dom/client";

//jsx react element
const HeadingFunctionalComponent = ()=> (<h1 id="heading" className="headingclass">
     This is heading   </h1>);

const headingReactElement=<h1>Hello...</h1>;
  

//React Functional Component
const HeadingComponent= ()=>{return(
<div>
    <HeadingFunctionalComponent/>
    {headingReactElement}
    <h2>this is sub heading</h2>
</div>
);}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);