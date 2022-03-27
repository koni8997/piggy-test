

// // 각 유형별 참여자 수 초기화
// let superPig=0;
// let piggy=0;
// let noPig=0;

// let qIdx = 0;
// var target = qnaList[qIdx].a[idx].score; //문항별 1,2,3

// function calResult(){
//     if(select>24){
//       return 0 //슈퍼멧돼지
//     }else if(select>16){
//       return 1  //아기돼지
//     }else{
//       return 2 //안돼지
//     }
//   }
// let point = calResult(); //결과 등급(3/2/1)



// conts btnArr=[0,1,2];
// conts txtArr=[...document.getElementsByClassName('results')];

// const clickableBtns=()=>{
//     return btnArr.map(btn=>{
//         return btn.addEventListener('click',()=>updateVote(btn.id.charAt(0)))
//     })
// }
// let select = 0; //결과 산출의 방식
// const updateVote=(point)=>{
//     if(point==='0') superPig++
//     if(point==='1') piggy++
//     if(point==='2') noPig++

//     txtArr.map(txt=>{
//         let ch=txt.id.charAt(0)
//         if(ch==='a') return txt.innerHTML=superPig
//         if(ch==='b') return txt.innerHTML=piggy
//         if(ch==='c') return txt.innerHTML=noPig
//     })

//     // 차트 업뎃
//     newChart.data.datasets[0].data=[superPig]
//     newChart.data.datasets[1].data=[piggy]
//     newChart.data.datasets[2].data=[noPig]
//     newChart.update()
// }

// // 통계1(완성 후 html 하단으로 이동)
// var context = document.getElementById('myChart').getContext('2d');
//     var myChart = new Chart(chartCvs, {
//         type: 'doughnut', // 차트의 형태
//         data: { // 차트에 들어갈 데이터
//             labels: [
//                 //x 축
//                 '슈퍼멧돼지','아기돼지','안돼지'
//             ],
//             datasets: [
//                 {
//                     maxBarThickness:70,
//                     label:'슈퍼멧돼지',
//                     data:[superPig],
//                     backgroundColor:['#56A3A6'],
//                     borderWidth:1
//                 },
//                 {
//                     maxBarThickness:70,
//                     label:'아기돼지',
//                     data:[piggy],
//                     backgroundColor:['#56A3A6'],
//                     borderWidth:1
//                 },
//                 {
//                     maxBarThickness:70,
//                     label:'안돼지',
//                     data:[noPig],
//                     backgroundColor:['#56A3A6'],
//                     borderWidth:1
//                 }
//             ]}
//         options: {
//             title:{
//                 display:true,
//                 text:["선택자수"]
//             },
//             tooltips:{enabled:false},
//             scales:{
//                 yAxes:[{
//                     tricks:{
//                         display:true,
//                         beginAtZero:true
//                     }
//                 }]
//             }
//         }
//     });



var context = document
                .getElementById('myChart')
                .getContext('2d');
            var myChart = new Chart(context, {
                type: 'pie', // 차트의 형태
                data: { // 차트에 들어갈 데이터
                    labels: [
                        //x 축
                        '1','2','3'
                    ],
                    datasets: [
                        { //데이터
                           data: [
                                21,
                                9,
                                25//x축 label에 대응되는 데이터 값
                            ],
                            backgroundColor: [
                                //색상
                                '#5d90c7',
                                '#7cbfb6',
                                '#f9d877'
                            ],
                            borderColor: [
                                //경계선 색상
                                'transparent',
                                'transparent',
                                'transparent'
                            ],
                           
                        }
                    ]
                },
                options: {
                    responsive: true,
                    showDatasetLabels : true,
                    legend: {
                             display: true, 
                             position:'bottom',//라벨 위치
                         } ,
                     labels:{
                         render:'percentage',
                         color:'black',
                         fontSize:50
                     } ,
                     
                   
                    plugins: {
                        // title:{
                        // display:true,
                        // text:'다른 사람들은 이렇대..',
                        // fontColor:black
                        // },
                        subtitle: {
                        display: true,
                        text: 'Custom Chart Subtitle'
                        },
                    },
                    layout: {
                        padding: {
                            top:60
                        }
                    }
                }
            });