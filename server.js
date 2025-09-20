const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// publicフォルダの絶対パスをログに出力
const publicPath = path.resolve(__dirname, 'public');
console.log(`[SERVER] Attempting to serve static files from: ${publicPath}`);

// publicフォルダから静的ファイルを提供する、という命令のみ
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`[SERVER] Minimal server listening on port ${PORT}`);
});
