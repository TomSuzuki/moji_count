
// ページ読み込み時の処理
window.addEventListener("load", async () => {

    // テキストエリア更新時の処理を追加
    document.getElementById("input_area").addEventListener("input", () => {
        // 文字列を取得
        const moji = document.getElementById("input_area").value;

        // 画面を更新
        refreshSrcreen(moji);
    });

    // 画面更新
    function refreshSrcreen(moji = "") {
        // 文字数更新
        document.getElementById("moji_count").value = `${[...moji].length} 文字`;

        // 単語数を更新
        document.getElementById("word_count").value = `${moji.match(/\S+/g)?.length || 0} 単語`;
    }

    // 画面を初期化
    refreshSrcreen();
});
