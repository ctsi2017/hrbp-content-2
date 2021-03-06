function cbPostAbnormalContrast(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removeDataFree();
    var dataName = [];
    var data = [];
    var rightData = [];
    var nameOne = '';
    var nameTwo = '';
    $.each(json.data.compareType, function (i, ct) {
      dataName[i] = ct;
    });
    $.each(json.data.data, function (j, d) {
      if (d.name === '异常') {
        $.each(d.value, function (k, d1) {
          data[k] = d1;
        });
        nameOne = d.name;
      }
      if (d.name === '在岗') {
        $.each(d.value, function (l, d2) {
          rightData[l] = d2;
        });
        nameTwo = d.name;
      }
    });
    changeColumarTitle2('columar-area', dataName, data, rightData, nameOne,
        nameTwo);
    $(".columar-area-point").css("display","block");
  }
  if (checkCodeEqualsOther(json)) {
    addDataFree();
  }
}