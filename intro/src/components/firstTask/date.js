function DateTimePretty({date}) {
  let processedDate = date;
  var dateObj = new Date(date);
  var currentDate = new Date();
  var hoursDifferent = Math.abs(dateObj - currentDate) / (60*60*1000);
  
  if (hoursDifferent < 1) {
    processedDate = "12 минут назад";
  }
  else if (hoursDifferent >= 24) {
    processedDate = `${(hoursDifferent / 24).toFixed(0)} дней назад`;;
  }
  else if (hoursDifferent >= 1) {
    processedDate = `5 часов назад`;
  }

  return <DateTime date={processedDate}/>
}



function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}



export {DateTimePretty};
