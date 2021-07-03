/**
 * Defines the test router controller.
 *
 */

async function list(_, res) {
  const data = {
    title: "test title",
    description: "this is a test data structure",
    results: "SUCCESS",
  };
  res.json({ data });
}

module.exports = { list };
