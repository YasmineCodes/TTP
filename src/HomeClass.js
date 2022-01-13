import React from "react";
import BlogList from "./Bloglist";
import axios from "axios";
import "./index.css";
class HomeClass extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({
        blogs: data,
        loading: false,
      });
    } catch (err) {
      alert(`EVERYTHING IS BROKEN: ${err}`);
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    alert("REMEMBER TO BIND YOUR HANDLE CHANGE/HANDLECLICK FUNCTIONS");
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  render() {
    const { loading } = this.state;
    const { blogs } = this.state;
    return (
      <div className="home">
        <div className="button" onClick={() => this.handleClick()}>
          BUTTON
        </div>

        {loading && <div>It's loading!</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
  }
}

export default HomeClass;
