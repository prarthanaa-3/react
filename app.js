/**
 * 
 * <div id ="parent">
 *    <divid="child">
 *     
 *    <h1></h1>
 *    </div>
 * </div>
 * 
 * 
 * 
 * 

















 */

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("h1",{},"im an tag")
    )
);


/* 
const heading = React.createElement("h1",
    {id:"heading"},
    "hello world");
*/
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);  