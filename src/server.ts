import config from "./app/config";
import mongoose from "mongoose";
import app from "./app";

const main = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`User app is runing on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
