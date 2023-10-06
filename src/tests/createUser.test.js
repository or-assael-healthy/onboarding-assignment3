const request = require("supertest");
const userHandler = require("../handlers/user");
const User = require("../db").models.User;
const { afterEach } = require("node:test");

const userToDelete = {
  name: "test",
  phoneNumber: "123456789",
  email: "testemail@mail.com",
};

describe("User creation http test", () => {
  afterEach(async () => {
    await User.destroy({
      where: {
        email: userToDelete.email,
      },
      force: true,
    });
    await jest.clearAllMocks();
  });
  test("valid user test", async () => {
    // ARRANGE

    userHandler.createUser = jest.fn();

    // ACT
    const res = await request(app).post("/user").send(userToDelete);

    // ASSERT
    expect(userHandler.createUser).toHaveBeenCalledWith(
      userToDelete.name,
      userToDelete.phoneNumber,
      userToDelete.email
    );
  });
});
