import React, { useState } from "react";

export default function AboutUs() {
  const [style, changeStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [buttonText, changeButtonText] = useState("Dark Mode");

  const changeBG = () => {
    if (style.backgroundColor === "white") {
      changeStyle({
        color: "white",
        backgroundColor: "black",
      });
      changeButtonText("Light Mode");
    } else {
      changeStyle({
        color: "black",
        backgroundColor: "white",
      });
      changeButtonText("Dark Mode");
    }
  };

  return (
    <div className="container" style={style}>
      <div className="my-3">
        <h2>About Us</h2>
      </div>
      <div className="accordion" id="accordionExample" style={style}>
        <div className="accordion-item">
          <h2 className="accordion-header" style={style}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={style}
            >
              <b>Accordion Item #1</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={style}
          >
            <div className="accordion-body" style={style}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={style}
            >
              <b>Accordion Item #2</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div>test</div>
      </div>
      <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={changeBG}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
