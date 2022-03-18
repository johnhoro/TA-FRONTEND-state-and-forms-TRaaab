import React from "react";
import data from "../data.json";
import Menu from "./Menu";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTag: "all",
    };
  }
  render() {
    let allCategories = data.map((food) => food.category);
    console.log(allCategories);
    let categories = allCategories.filter(
      (category, i, array) => array.indexOf(category) === i
    );
    console.log(categories);
    let allProducts;

    if (this.state.activeTag === "all") {
      allProducts = data;
    } else {
      allProducts = data.filter(
        (data) => this.state.activeTag === data.category
      );
    }
    return (
      <div className="container">
        <header className="header">
          {categories.map((category, i) => {
            console.log(category);
            return (
              <>
                <button
                  className={this.state.activeTag === category ? "active" : ""}
                  onClick={() => {
                    this.setState({
                      activeTag: category,
                    });
                  }}
                >
                  {category.toUpperCase()}
                </button>
              </>
            );
          })}
        </header>
        <main className="main">
          <section className="all-article">
            <Menu allProducts={allProducts} />
          </section>
        </main>
      </div>
    );
  }
}
export default Tag;
