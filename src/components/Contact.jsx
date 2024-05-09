import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_z6kgjja",
				"template_5y1o4ks",
				form.current,
				"WP7XLWTfSr8dY2SQ-"
			)
			.then(
				(result) => {
					toast.success("Message Envoyé avec succès!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					document.getElementById("myForm").reset();
				},
				(error) => {
					toast.error("Ops Message non envoyé!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
	};

	return (
		<>
			<form
				id="myForm"
				className="contactform"
				ref={form}
				onSubmit={sendEmail}
			>
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<input
								type="text"
								name="name"
								placeholder="TON NOM"
								required
							/>
						</div>
					</div>
					{/* End .col */}

					<div className="col-12 col-md-6">
						<div className="form-group">
							<input
								type="email"
								name="user_email"
								placeholder="TON EMAIL"
								required
							/>
						</div>
					</div>
					{/* End .col */}

					<div className="col-12 col-md-12">
						<div className="form-group">
							<input
								type="text"
								name="subject"
								placeholder="TON OBJET"
								required
							/>
						</div>
					</div>
					{/* End .col */}

					<div className="col-12">
						<div className="form-group">
							<textarea
								name="message"
								placeholder="TON MESSAGE"
								required
							></textarea>
						</div>
					</div>
					{/* End .col */}

					<div className="col-12">
						<button type="submit" className="button">
							<span className="button-text">
								Envoyer le Message
							</span>
							<span className="button-icon fa fa-send"></span>
						</button>
					</div>
					{/* End .col */}
				</div>
			</form>
		</>
	);
};

export default Contact;
