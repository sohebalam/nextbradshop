import mongoose from "mongoose"

function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected")
    return
  }
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.on("connected", () => {
    console.log("connected to mongoDB!!!")
  })
  mongoose.connection.on("error", (err) => {
    console.log("error connecting", err)
  })
}

export default connectDB
