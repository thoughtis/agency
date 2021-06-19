exports.handler = async function(event, context) {
  console.log("Hello function");
  console.log(event);
  return { statusCode: 200 };
}