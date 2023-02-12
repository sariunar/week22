const Chart = require('chart.js/auto');
const ctx = document.getElementById('myChart');
const Choreographer = require('choreographer-js');

let choreographer = new Choreographer({
    animations: [
        {
            range: [-1, window.innerHeight * 4],
            selector: '#box',
            type: 'scale',
            style: 'opacity',
            from: 0.1,
            to: 1
        }
    ]
})
window.addEventListener('scroll', () => {
    choreographer.runAnimationsAt(window.pageYOffset)
})

const data = {
    labels: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
    datasets: [{
        label: 'Tasks',
        data: [1, 5, 6, 4, 8, 7, 3, 6, 2],
        fill: false,
        borderColor: 'rgb(122, 59, 180)',
        tension: 0.6,
        cubicInterpolationMode: 'monotone'
    }]
};
const config = {
    type: 'line',
    data: data,
};
new Chart(ctx, config);


let date = document.querySelector('.date');
date.innerText = new Date().toLocaleDateString('en-US', { weekday: 'long', year: "numeric", month: 'long', day: 'numeric' });



const ctx2 = document.getElementById('myChart2');
const data2 = {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'New Tasks',
            data: [10, 15, 28, 16, 31, 33, 18],
            borderColor: 'rgb(56, 15, 95)',
            backgroundColor: ['rgb(56, 15, 95)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
new Chart(ctx2, data2);

const ctx3 = document.getElementById('myChart3');
const data3 = {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'In Process',
            data: [0, 15, 10, 0, 7, 8, 10],
            borderColor: 'rgb(112, 15, 15)',
            backgroundColor: ['rgb(112, 15, 15)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
new Chart(ctx3, data3);

