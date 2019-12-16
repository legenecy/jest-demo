it("will fail every time", () => {
  Date.now = jest.fn(() => 1482363367071);
  const user = {
    createdAt: new Date.now(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James"
  };

  expect(user).toMatchInlineSnapshot(
    {
      id: expect.any(Number)
    },
    `
    Object {
      "createdAt": mockConstructor {},
      "id": Any<Number>,
      "name": "LeBron James",
    }
  `
  );
});
