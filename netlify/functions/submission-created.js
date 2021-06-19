exports.handler = async function(event, context) {
  const formValues = event.body.payload
  console.log(formValues);
  return { statusCode: 200 };
}