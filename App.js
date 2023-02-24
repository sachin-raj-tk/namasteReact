//THIS FILE DELIVERS JAVASCRIPT TO  "react.html" PAGE

// creates the contents which we later add to the root element
    const heading = React.createElement("h1",{id:'green'},"Namaste React using React first test")
    const heading2 = React.createElement("h1",{style:{background:"red"},id:"heading2"},"Namaste React using React testing 2")
    const mainDiv = React.createElement("div",{id:"mainDiv"},[heading,heading2])
    


    // create the root element into which react will render the elements
    const root = ReactDOM.createRoot(document.getElementById("root"))
    
    //below code is to understand woring of react when it could not find the root element as instead of "root" it is written as "roo" below
    
    // const root = ReactDOM.createRoot(document.getElementById("roo"))


    //below code render the mainDiv element to the root div
    root.render(mainDiv)

    //below code overwrites the root div with and add heading2 element to it
    // root.render(heading2)