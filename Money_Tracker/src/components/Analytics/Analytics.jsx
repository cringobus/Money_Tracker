import "./Analytics.css";

const Analytics = () => {


  return (
    <div className="analytics">
      <h1>Our reviews</h1>
      <hr />
      <div className='analytics-user-card'>
        <img src="/pfp.jpg" className="pfp" alt="profile picture" />
        <div className="analytics-user-card-info">
            <h2>Stephen Brown</h2>
            <p>This app has completely changed my financial habits and helped me overcome money stress. I used to constantly wonder where my paycheck went, but now I have complete control over my budget.</p>
            <p>5/5⭐</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
