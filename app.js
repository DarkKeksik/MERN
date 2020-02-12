const express = require("express"),
      config = require("config"),
      mongoose = require("mongoose")

const app = express();

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 5000;
async function start() {
    try {
        await mongoose.connect(config.get("mongoUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });
    } catch(e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
}

start();

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}...`);
});