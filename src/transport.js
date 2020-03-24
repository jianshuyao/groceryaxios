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
              label: 'Bus',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"blue",
              backgroundColor:'blue',
              fill:false
            },
            {
                label: 'Taxi',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"orange",
                backgroundColor:'orange',
                fill:false
              },
              {
                label: 'LRT',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"green",
                backgroundColor:'green',
                fill:false
              }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Transport - Singapore',
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
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        //console.log(response.data)
        console.log(this.results)
        for (let i = 0; i < this.results.length; i++){
            if (this.results[i]["type_of_public_transport"] === "Bus"){
                this.chartdata.datasets[0].data.push(this.results[i]["average_ridership"])
                this.chartdata.labels.push(this.results[i]["year"])}
            
        }
        for (let i = 0; i < this.results.length; i++){
            if (this.results[i]["type_of_public_transport"] === "Taxi"){
                this.chartdata.datasets[1].data.push(this.results[i]["average_ridership"])
                }
            
        }
        for (let i = 0; i < this.results.length; i++){
            if (this.results[i]["type_of_public_transport"] === "LRT"){
                this.chartdata.datasets[2].data.push(this.results[i]["average_ridership"])
                }
            
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