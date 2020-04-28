import Paginatio from "react-js-pagination";
import React, { Component } from "react";
import "../../layout/NavBar/Navbar.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div class="BottomBox">
        <Paginatio
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
     </div>
    );
  }
}

export default Footer;
