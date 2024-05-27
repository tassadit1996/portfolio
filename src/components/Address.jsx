import React from "react";

const Address = () => {
	return (
		<>
			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-map position-absolute"></i>
				<span className="d-block">Adresse</span>Montréal, QC, Canada.
			</p>
			{/* End .custom-span-contact */}

			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-envelope-open position-absolute"></i>
				<span className="d-block">Email</span>{" "}
				<a href="mailto:steve@mail.com">maghni.tassadit@gmail.com</a>
			</p>
			{/* End .custom-span-contact */}

			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-phone-square position-absolute"></i>
				<span className="d-block">Téléphone</span>{" "}
				<a href="Tel: +216 21 184 010"> +1 514-718-9215</a>
			</p>
			{/* End .custom-span-contact */}
		</>
	);
};

export default Address;
