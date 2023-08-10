import "./Card.css";

const Card = ({ key, data }) => {
	return (
		<>
			<div className="cardCon">
				<div className="cardImageCon">
					<img className="cardImg" src={data.avatar} alt=""/>
				</div>
				<div className="cardBot">
					<h1>{data.first_name}</h1>
					<p>{data.email}</p>
				</div>
			</div>
		</>
	);
};

export default Card;