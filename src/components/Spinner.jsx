import ReactLoading from "react-loading";
import PropTypes from "prop-types";

const Spinner = ({ type, color }) => (
  <div className="ml-4">
    <ReactLoading type={type} color={color} height={"6 %"} width={"6%"} />
  </div>
);

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Spinner.defaultProps = {
  type: "spin",
  color: "#000000",
};

export default Spinner;
