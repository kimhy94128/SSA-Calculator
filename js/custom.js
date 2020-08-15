const inputDate = document.querySelector('.input_date');
const resultArea = document.querySelector('.result_area');
const progressBar = document.querySelector('.progress');
const progressText = document.querySelector('.progress_text');
const start_date = document.querySelector('.start_date');
const end_date = document.querySelector('.end_date');
const end_date_t = document.querySelector('.end_date_t');

// 단축일 계산
function getMinuseDate(startDate){
  const startMinuse = new Date('2016-10-03');
  const endMinuse = new Date('2020-03-15');
  
  if(startDate < startMinuse){
    return 0
  }
  if(startDate >= startMinuse && startDate <= endMinuse){
    const minuseDate = Math.floor((startDate - startMinuse) / (1000 * 60 * 60 * 24) / 14)+1;
    alert(`복무기간 단축 ${minuseDate}일`)
    return minuseDate
  }
  if(startDate > endMinuse){
    return 90
  }
}

// 결과 반환
function getResult(startDate, date){
  const endDate = new Date(date.setDate(date.getDate()+730-getMinuseDate(startDate)));
  const nowDate = new Date()

  const past = (nowDate - startDate) / (1000 * 60 * 60 * 24);
  const term = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const gauge = (past / term * 100).toFixed(2)
  
  start_date.innerHTML = dateFormat(startDate);
  end_date.innerHTML = dateFormat(endDate);
  end_date_t.innerHTML = dateFormat(endDate);
  progressBar.value = gauge;
  progressText.innerHTML = gauge + '%'
}

// 날짜 변환
function dateFormat(date){
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
}

function init(){
  const startDate = new Date(inputDate.value);
  const _startDate = new Date(inputDate.value);
  resultArea.classList.add('active');
  if(_startDate == 'Invalid Date'){
    alert('날짜를 입력하세요.');
    return false;
  }
  getResult(startDate, _startDate);
}
