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
    removePoint('scatter_point', 'r_scatter_point');
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
    var dataName = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var nameone = [];
    var nametwo = [];
    var namethree = [];
    var namefour = [];
    var namefive = [];
    $.each(json.data, function (i, item) {
      if (item.assessment === '高效') {
        data1[0] = substringChar(item.proportion);
        nameone[0] = item.assessment;
      }
      if (item.assessment === '勤奋') {
        data2[0] = substringChar(item.proportion);
        nametwo[0] = item.assessment;
      }
      if (item.assessment === '普通') {
        data3[0] = substringChar(item.proportion);
        namethree[0] = item.assessment;
      }
      if (item.assessment === '低效') {
        data4[0] = substringChar(item.proportion);
        namefour[0] = item.assessment;
      }
      if (item.assessment === '慵懒') {
        data5[0] = substringChar(item.proportion);
        namefive[0] = item.assessment;
      }
    });
    changeColumar5('columar-area', dataName, data1, data2, data3, data4, data5,
        nameone, nametwo, namethree, namefour, namefive);
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist('scatter_point', 'r_scatter_point');
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