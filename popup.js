document.addEventListener('DOMContentLoaded', function () {
  // popup.htmlのul#js-history-listを取得する
  var ul = document.querySelector('#js-history-list');
  // 生成した<li>タグのリストを保持する変数
  var html = '';
  var query = {
    text: ''
  };
  chrome.history.search(query, function (results) {
    // resultsは配列なので、forEach()関数を実行することが出来る
    results.forEach(function (result) {
      html += '<li>' +
                '<a href="' + result.url + '" target="_blank">' +
                  result.title +
                '</a>' +
              '</li>';
    });
    ul.innerHTML = html;
  });
});
