'use strict';
$(document).ready(function(){
  var correct = $("th:contains('Correct')").index();
  var answered = $("th:contains('Answered')").index();
  var unanswered = $("th:contains('Unanswered')").index();
  if (correct !== -1 && answered !== -1 && unanswered !== -1){ 
    <em></em>$correct = $("td").eq(correct);
    $answered = $("td").eq(answered);
    $unanswered = $("td").eq(unanswered);
    var cor = parseInt(($correct.text()));
    var ans =  parseInt(($answered.text()));
    var unans =  parseInt(($unanswered.text()));
    var correctGrade = 2;
    var topQuestions = 0.75;
    if (ans + unans > 0){
        var grade = Math.round(100 * (ans + cor) / ((unans + ans) * correctGrade * topQuestions));
    }else{
        var grade = 0;
    }
    if (grade >= 100) grade = 100;
    gradep = grade + '%';

    var calculate = function(a,u,c){
      if (u + a > 0){
        return Math.round(100*(a + c)/((u + a) * correctGrade * topQuestions));
	  }else{
		return 0;
	  }
    }
    var count = 0;
    while(grade < 100){
      grade = calculate(++ans,unans,++cor);
      count++;
    }

    $("tr").each(function(index){
      if (index === 0){
        $(this).append("<th> Correct% </th>" + "<th>Correct X More");
	  }else{
	    $(this).append("<td align = 'center' >" + gradep + "</td>" + "<td align = 'center'>" + count + "</td>");
	  }
	});
  }
});
