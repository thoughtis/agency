exports.handler = async function(event, context) {
  console.log("Hello function");
  const formValues = event.body.payload
  console.log(formValues);
  return { statusCode: 200 };
}