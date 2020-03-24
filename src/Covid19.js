import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        color:["orange","blue","black","red","green"],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Cases',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"blue",
              backgroundColor:'blue',
              pointRadius: 0,
              fill:false
            },
              {
                label: 'Death',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"red",
                backgroundColor:'red',
                pointRadius: 0, 
                fill:false
              },
              {
                label: 'Recovered',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"green",
                backgroundColor:'green',
                pointRadius: 0, 
                fill:false
              }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'COVID19 Cases - United States',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'top'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        //console.log(response.data)
        console.log(this.results)
        for (let i = 0; i < this.results.length; i++){
            this.chartdata.datasets[0].data.push(this.results[i]["cases"])
            this.chartdata.datasets[1].data.push(this.results[i]["deaths"])
            this.chartdata.datasets[2].data.push(this.results[i]["recovered"])
            this.chartdata.labels.push(this.results[i]["timestamp"].substring(0,10))
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}