// Mock data
const userData = [
    { id: 1, username: 'john_doe', activity: 'High', referrals: 15 },
    { id: 2, username: 'jane_smith', activity: 'Medium', referrals: 8 },
    { id: 3, username: 'bob_johnson', activity: 'Low', referrals: 3 },
    { id: 4, username: 'alice_williams', activity: 'High', referrals: 12 },
    { id: 5, username: 'charlie_brown', activity: 'Medium', referrals: 6 }
];

const contentData = {
    views: 15000,
    shares: 2500,
    comments: 1800,
    exits: 500
};

const analyticsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Views',
            data: [1200, 1900, 3000, 5000, 4000, 3000, 2000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Likes',
            data: [500, 700, 1000, 1200, 1500, 1300, 900],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        },
        {
            label: 'Shares',
            data: [200, 300, 400, 600, 500, 400, 300],
            borderColor: 'rgb(255, 205, 86)',
            tension: 0.1
        }
    ]
};

// Populate user management table
function populateUserTable() {
    const tableBody = document.getElementById('user-table-body');
    userData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.activity}</td>
            <td>${user.referrals}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Update content moderation metrics
function updateContentMetrics() {
    document.getElementById('views-count').textContent = contentData.views.toLocaleString();
    document.getElementById('shares-count').textContent = contentData.shares.toLocaleString();
    document.getElementById('comments-count').textContent = contentData.comments.toLocaleString();
    document.getElementById('exits-count').textContent = contentData.exits.toLocaleString();
}

// Create analytics chart
function createAnalyticsChart() {
    const ctx = document.getElementById('analytics-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: analyticsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Weekly User Engagement'
                }
            }
        }
    });
}

// Initialize dashboard
function initDashboard() {
    populateUserTable();
    updateContentMetrics();
    createAnalyticsChart();
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);