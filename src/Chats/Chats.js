import Chart from 'react-apexcharts';

function Charts() {
  const series = [
    {
      name: 'Student',
      data: [30, 40, 35, 50,20],
      color:'orange'
    },
     {
      name: 'Student1',
      data: [20, 30, 45, 60,40],
      color:'blue'
    },
     {
      name: 'Student2',
      data: [10, 40, 55, 20,50],
      color:'red'
    },
     {
      name: 'Student3',
      data: [50, 40, 25, 10,30],
      color:'salman'
    }
  ];
  const options = {
    chart: {
      type: 'bar'
    },
    title: {
        text: 'Number of students per course',
        align: 'center',
        style: {
        fontSize: '20px'
        }
    },
    xaxis: {
      categories: ['Java', 'Python', 'DevOps', 'Frontend','SAP']
    },
    options:{
        color:['fffff']
    }
  };
 const options1 = {
          series: [44, 55, 13, 43, 22],
          chart: {
          width: 380,
          type: 'pie',
          color:'rgba(53, 82, 82, 0.93)'
        },
        title: {
            text: 'Revenue per course',
            align: 'center',
            style: {
            fontSize: '20px'
            }
        },
        xaxis: {
      categories: ['Java', 'Python', 'DevOps', 'Frontend','SAP']
    },
    yaxis: {
      title: {
        text: 'Revenue ($)'
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `$${val}`;
      }
    }
    };
    const series1 = [
        {
        name: 'Revenue',
        data: [44000, 55000, 13000, 43000, 12000],
        color:'rgba(53, 82, 82, 0.93)'
        }
    ];

  const options2 = {
    chart: {
      type: 'bar',
      
    },
    xaxis: {
      categories: ['Active', 'Completed']
    },
    title: {
      text: 'Active vs Completed Enrollments',
      align: 'center',
      style: { fontSize: '18px' }
    },
    dataLabels: {
      enabled: true
    },
    yaxis: {
      title: {
        text: 'Number of Students'
      }
    }
  };
  const series2=[
    { 
      name: 'Students',
      data: [50,80]
    }
  ]
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',marginTop:'90px' }}>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={500}
        height={300}
      />
      <Chart
        options={options1}
        series={series1}
        type="bar"
        width={380}
      />
      <Chart
        options={options2}
        series={series2}
        type="bar"
        width={380}
      />
    </div>
  );
}

export default Charts;
