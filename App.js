    const heading = React.createElement("h1",{},"Namaste React using React")
    const heading2 = React.createElement("h1",{},"Namaste React using React testing 2")
    const root = ReactDOM.createRoot(document.getElementById("root"))



    //below code is to understand woring of react when it could not find the root element as instead of "root" it is written as "roo" below
    // const root = ReactDOM.createRoot(document.getElementById("roo"))
    root.render(heading)
    root.render(heading2)