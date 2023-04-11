const FeedbackItem = (props) => {
    return (
        <div className="feedback-item">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default FeedbackItem;