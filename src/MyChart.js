import React from 'react';
import ReactHighCharts from 'react-highcharts';
import './MyChart.css';

class MyChart extends React.Component {
    render() {
        var d = this.props.chartdata;
        var config = {
            /*xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },*/
           
            series: [{
                data: d,
                name: 'some series'
            }],
            title: {
                text: 'Some chart'
            }
        };

        return (
            <div className="mychart">
                <ReactHighCharts config={config} ref="chart" isPureConfig={false}/>
            </div>
        );
    }
}

export default MyChart;