import React from "react";
import data from "../data.json";
import Modal from "./Modal";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      selectedIndex: null,
      modalClose: false,
    };
  }
  handleClick = (index) => {
    this.setState({
      selectedIndex: index,
      modalClose: false,
    });
  };

  handleMouseOver = (i) => {
    this.setState({
      activeIndex: i,
    });
  };

  handleMouseLeave = (i) => {
    this.setState({
      activeIndex: null,
    });
  };

  render() {
    // console.log(data);
    return (
      <>
        <section className="card">
          {data.map((movie, i) => {
            return (
              <div
                className="single-card"
                key={i}
                onMouseOver={() => this.handleMouseOver(i)}
                onMouseLeave={() => this.handleMouseLeave(i)}
              >
                <div className="">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="">{movie.Title}</h2>
                <p className="">Released: {movie.Released}</p>
                {this.state.activeIndex === i ? (
                  <button onClick={() => this.handleClick(i)} className="">
                    More Info
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </section>
        <section
          className={
            this.state.selectedIndex && !this.state.modalClose
              ? "show"
              : "hidden"
          }
        >
          <div className="flex justify-end">
            <button
              className=""
              onClick={() =>
                this.setState({
                  selectedIndex: null,
                  modalClose: true,
                })
              }
            >
              Close
            </button>
          </div>
          {this.state.selectedIndex ? (
            <Modal {...data[this.state.selectedIndex]} state={false} />
          ) : (
            ""
          )}
        </section>
      </>
    );
  }
}
export default Card;
