const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');
const cors = require('cors');
const fs = require('fs');
const ConnectDB=require('./config/db');
const Authroute=require('./routes/auth')

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

ConnectDB();

app.get('/',async(req,res)=>{
    res.send('Backend Is Running');
})
app.use("/api/auth",Authroute );

app.post('/upload', upload.array('files', 10), async (req, res) => {
  try {
    const allData = [];

    for (const file of req.files) {
      const jsonArray = await csv().fromFile(file.path);
      allData.push(...jsonArray);

      // Optional: delete uploaded file after processing
      fs.unlinkSync(file.path);
    }

    res.json(allData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'CSV parsing failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
