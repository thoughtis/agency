exports.handler = async function(event, context) {
  const formValues = JSON.parse(event.body).payload;
  console.log(formValues);
  return { statusCode: 200 };
}