import { useParams, Link } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  params.productId;
  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>{" "}
        {/* directly takes us one step above */}
      </p>
    </div>
  );
};

export default ProductDetail;
