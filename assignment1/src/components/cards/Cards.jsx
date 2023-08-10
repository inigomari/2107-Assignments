import "./Cards.css";
import Card from "../card/Card";

const Cards = ({ data }) => {
    return (
        <>
            <div className="cardsCon">
                {
                    data.map((assignmentData, i) => {
                        return (
                            <Card key={1} data={assignmentData} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cards;