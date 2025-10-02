const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");
if (fs.existsSync(logsDir)) {
  fs.readdirSync(logsDir).forEach(file => {
    fs.unlinkSync(path.join(logsDir, file));
    console.log(`delete files...${file}`);
  });

  fs.rmdirSync(logsDir);
}
