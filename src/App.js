import FeedbackItem from "./components/FeedbackItem";
import Navbar from "./components/Navbar";

const App = () => {
  const feedback = [
      {
        "title": "Great Product!",
        "description": "I absolutely love this product. It has made my life so much easier!"
      },
      {
        "title": "Could be better",
        "description": "I like the product but it could be improved in a few areas."
      },
      {
        "title": "Very Disappointed",
        "description": "I had high hopes for this product, but it didn't live up to my expectations."
      },
      {
        "title": "Excellent Customer Service",
        "description": "The customer service I received was outstanding. They went above and beyond to help me!"
      },
      {
        "title": "Needs more features",
        "description": "I think this product is good, but it could benefit from more features."
      },
      {
        "title": "Works well for me",
        "description": "This product does exactly what I need it to do. I'm very happy with my purchase."
      },
      {
        "title": "Not user-friendly",
        "description": "I found this product difficult to use and not very intuitive."
      },
      {
        "title": "Would recommend",
        "description": "I think this product is great and I would definitely recommend it to others."
      },
      {
        "title": "Expensive but worth it",
        "description": "This product is quite pricey, but the quality is excellent and it's worth the cost."
      },
      {
        "title": "Dislike the new update",
        "description": "I'm not a fan of the new update. It's made the product more complicated and harder to use."
      }
    ]
  
  return (
    <div>
      <Navbar />
      <main>
        <input type="search" placeholder="Search here" id="search-input" />
        <button type="button">Search</button>

        <div id="feedback-list">
          {feedback.map((item, index)=>(
            <div key={index}>
              <FeedbackItem title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
