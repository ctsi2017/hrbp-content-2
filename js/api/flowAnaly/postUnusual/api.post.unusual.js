var apiReq1 = {};
var apiReq2 = {};
var warningValueNum = 0;

function postUnusualApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, postUnusualClick, true);
    apiReq1 = getApiReq(true);
    apiReq2 = getApiReq(true);
    // 2.1.12	员工在岗情况整体占比图
    api('/mobilityAnalysis/empPostOverallSituation', 3001, 'cbEmpPostOverallSituation', JSON.stringify(apiReq));

}
function postAbnormalRanking(postAbnormalDuration) {
    // 在岗异常时长	postAbnormalDuration	必填	String
    apiReq1.postAbnormalDuration = postAbnormalDuration.replace('小时', '');
    // 2.1.13	在岗异常情况排名表
    api('/mobilityAnalysis/postAbnormalRanking', 3001, 'cbPostAbnormalRanking', JSON.stringify(apiReq1));
}
function postUnusualClick(region2, region3, post, month) {
    apiReq2 = clickApi(region2, region3, post, month, true);
    // 2.1.12	员工在岗情况整体占比图
    api('/mobilityAnalysis/empPostOverallSituation', 3001, 'cbEmpPostOverallSituation', JSON.stringify(apiReq2));
}
function formDataDay(day) {
    postUnusualClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    postUnusualClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}