import Star from "./Star";

type StarsFormat = {
    starsNumber: number;
};

const Stars = ({starsNumber}: StarsFormat) => {

    if (starsNumber < 1 || starsNumber > 5) return <>Nonvalid Rating</>;
    
    return <ul className="card-body-stars u-clearfix">
            <Star starsNumber={starsNumber}/>
        </ul>
    
};
export default Stars;