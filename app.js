const buttons = document.querySelectorAll('.btn');

const fetchData = async () => {
    const response = await fetch('data.json');
    const newRes = await response.json();
    handleUserActivity(newRes);
};

const handleUserActivity = (activities) => {
    let cards = activities.map( ( activity) => {

        return `
        <div class="activity-card"> 
        <div class="card"> 
        
        <!-- daily activity card -->
        <div class="card-title">
        <p> ${activity.title}</p>
        <img src="/images/icon-play.svg" alt="play"/>
        </div>
        </div>
        </div>
        
        `;
    })
}