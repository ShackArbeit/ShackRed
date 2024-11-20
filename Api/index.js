const express = require('express');
const fs = require('fs');
const path = require('path');
const cors=require('cors')

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.BASE_URL || 3000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.post('/api/save-html', (req, res) => {
  const { content, filename } = req.body;
  const filePath = path.join(__dirname, "../", filename);
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('寫入檔案失敗:', err);
      res.status(500).json({ message: 'Failed to save HTML file' });
    } else {
      res.json({ message: 'HTML file saved successfully' });
      console.log('文件內容:',content)
      console.log('文件名稱:',filename)
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

