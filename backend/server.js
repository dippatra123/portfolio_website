const app = require("./app");
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`My app is running on portno ${PORT}`);
});
