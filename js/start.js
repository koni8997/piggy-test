const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10;//문항 수
let select = 0; //결과 산출의 방식

// 테스트 시작 버튼 함수
function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

//설문조사 중 페이지 넘어가는 효과
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}


//결과 등급(3단계) 나누기
function calResult(){
  if(select>24){
    return 0 //슈퍼멧돼지
  }else if(select>16){
    return 1  //아기돼지
  }else{
    return 2 //안돼지
  }
}

// 결과(값)
function setResult(){
  let point = calResult(); //결과 등급(3/2/1)
  const resultName = document.querySelector('.resultname'); //결과(제목)자리
  const imgDiv = document.querySelector('#resultImg');//결과(이미지) 자리


  // 결과(제목)
  resultName.innerHTML = infoList[point].name; //결과 등급에 따른 제목

  // 결과(이미지)
  var resultImg = document.createElement('img'); //img태그
  imgDiv.appendChild(resultImg); //결과(이미지) 자리에 img태그 추가

  var imgURL = 'img/image-' + point + '.gif'; //등급에 맞는 gif선택
  resultImg.src = imgURL; //img태그 안 src속성값
  resultImg.alt = point;//img태그 안 alt속성값
  resultImg.classList.add('img-fluid'); //img태그 안 class값 

  const resultDesc = document.querySelector('.resultDesc');//결과 설명
  resultDesc.innerHTML = infoList[point].desc;//결과 등급에 따른 설명
}



// 답변
function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].score;
      select+=target;

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx); //다음으로 넘어가기
    },450)
  }, false);
}


// 다음으로 넘어가기,상태바
function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}




