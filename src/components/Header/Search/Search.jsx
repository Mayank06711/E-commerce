import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Prod from "../../../assets/products/earbuds-prod-2.webp";
import useFetch from "../../../hooks/useFetch";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const onChange = (inputText) => {
    setQuery(inputText.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[Title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus //isse search box me line b,link hoti regi
          placeholder="Search for product"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item?.attributes?.img.data[0]?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item?.attributes?.Title}</span>
                <span className="desc">{item?.attributes?.Desc}</span>
              </div>
            </div>
          ))}
          {/* <div className="search-result-item">
            <div className="img-container">
              <img src={Prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">product desc</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
