import { PropTypes } from 'prop-types';

export const Section = ({ tittle, children }) => (
  <section>
    <h2>{tittle}</h2>
    <>{children}</>
  </section>
);

Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
