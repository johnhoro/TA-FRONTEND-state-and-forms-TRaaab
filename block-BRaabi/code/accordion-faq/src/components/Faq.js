import React from "react";
import { questions } from "./data";

class Faq extends React.Component {
  constructor(props) {
    super();
    this.state = { activeIndex: null };
  }

  isHandelClick = () => {
    this.setState({
      isTrue: null,
    });
  };

  render() {
    return (
      <>
        <ul className="container">
          {questions.map((ele, index) => {
            return (
              <>
                <li className="ques">
                  <h2
                    onClick={() => {
                      this.setState({
                        activeIndex:
                          this.state.activeIndex === index ? null : index,
                      });
                    }}
                  >
                    {ele.Q} {index === this.state.activeIndex ? "Hide" : "Show"}
                  </h2>
                  {this.state.activeIndex === index && <p>{ele.A}</p>}
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Faq;
