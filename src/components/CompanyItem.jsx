import { useState } from "react";
import PropTypes from "prop-types";


const CompanyItem = ({ company, defaultVisibility }) => {
    const [isVisible, setIsVisisble] = useState(defaultVisibility);
  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  )
}

CompanyItem.propTypes = {
  company: PropTypes.object.isRequired,
  defaultVisibility: PropTypes.bool,
};

export default CompanyItem
