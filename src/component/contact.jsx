import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<div>
					Call me: <a href="tel:1-6179828400">617-982-8400</a>
					<br />
					Send me email: <a href="mailto:ljie96512@gmail.com">ljie96512@gmail.com</a>
				</div>
				<br />

			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
