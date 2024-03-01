import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"
const Category = ({categories}) => {
  const navigate = useNavigate();
    return (
        <div className="shop-by-category">
          <div className="categories">
{/* below ?. is operator for optional chaining which is used to not show error it would works like
   categories?.data  =>   if categories object exist and it is neither undefined nor null then only check for data in it else dont show it ,will show undefined
*/}

            {categories?.data?.map((item)=>
              (
                <div key = {item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="cat1" />
            </div>
              )
            )}
            
            {/* <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>  */}
          </div>
        </div>
      );
};

export default Category;
