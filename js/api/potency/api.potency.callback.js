function cbWarningValue(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    $.each(json.data, function (i, item) {
      warningValueNum = item.warningValue;
    });
  }
  empWorkEfficiencyIndex();
}

function cbEmpWorkEfficiencyIndex(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint('potency_index_point', 'r_potency_index');
    $.each(json.data, function (i, item) {
      $('#potency_index').html(parseInt(item.index));
      checkIndexRedByIndex(parseInt(item.index), 'potency_index',
          warningValueNum);

    });
    // empWorkEfficiencyMap();
    empWorkEfficiencyPercentage();
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist('potency_index_point', 'r_potency_index');
    // empWorkEfficiencyMap();
    empWorkEfficiencyPercentage();
  }
}
function cbEmpWorkEfficiencyMap(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint('scatter_point', 'r_scatter_point');
    xyObj = json.data;
    quadrantCoordinatePoint();
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist('scatter_point', 'r_scatter_point');
  }
}
function cbEmpWorkEfficiencyPercentage(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint('leave-ring-point', 'r_scatter_point');
    // var data1 = 0;
    // var data2 = 0;
    // var data3 = 0;
    // var data4 = 0;
    // var data5 = 0;
    // $.each(json.data, function (i, item) {
    //   if (item.assessment === '高效') {
    //     data1 = substringChar(item.proportion);
    //   }
    //   if (item.assessment === '勤奋') {
    //     data2 = substringChar(item.proportion);
    //   }
    //   if (item.assessment === '普通') {
    //     data3 = substringChar(item.proportion);
    //   }
    //   if (item.assessment === '低效') {
    //     data4 = substringChar(item.proportion);
    //   }
    //   if (item.assessment === '慵懒') {
    //     data5 = substringChar(item.proportion);
    //   }
    // });
    // scaleMap5('potency_index_point', 'potency-rate1', 'potency-rate2',
    //     'potency-rate3', 'potency-rate4', 'potency-rate5', data1, data2, data3,
    //     data4, data5, 'num-span1', 'num-span2', 'num-span3', 'num-span4',
    //     'num-span5');
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var v4 = 0;
    var v5 = 0;
    $.each(json.data, function (i, item) {
      if (item.assessment === '高效') {
        v1 = substringChar(item.proportion);
        $("#potency-highly").html(item.proNum);
      }
      if (item.assessment === '勤奋') {
        v2 = substringChar(item.proportion);
          $("#potency-diligent").html(item.proNum);
      }
      if (item.assessment === '普通') {
        v3 = substringChar(item.proportion);
          $("#potency-common").html(item.proNum);
      }
      if (item.assessment === '低效') {
        v4 = substringChar(item.proportion);
          $("#potency-ineffic").html(item.proNum);
      }
      if (item.assessment === '慵懒') {
        v5 = substringChar(item.proportion);
          $("#potency-indolent").html(item.proNum);
      }
    });
    changeHRing6(v1, v2, v3, v4, v5, '高效', '勤奋', '普通', '低效', '慵懒');
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist('leave-ring-point', 'r_scatter_point');
  }
}
function cbQuadrantCoordinatePoint(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint('scatter_point', 'r_scatter_point');
    changeQuadrant(json.data, xyObj);

    empWorkEfficiencyPercentage();
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist('scatter_point', 'r_scatter_point');
  }
}