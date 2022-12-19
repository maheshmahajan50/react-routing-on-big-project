import { useParams } from "react-router-dom";
const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quoute Details page.</h1>
      <p>Here is the Id #{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
