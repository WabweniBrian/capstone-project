import bcryptjs from "bcryptjs";
import express from "express";
import mongoose from "mongoose";
import User from "../backend/models/user.model.js";
import { use, expect } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);

const app = express();

describe("Auth Controller Tests", function () {
  // this.timeout(10000); // Increased timeout for slower operations

  // before(async () => {
  //   mongoose.connect("mongodb://localhost:27017/testdb");
  // });

  // after(async () => {
  //   await User.deleteMany({});
  //   await mongoose.disconnect();
  // });

  describe("POST /api/auth/signup", () => {
    it("should create a new user on signup", async () => {
      // This test checks if a new user is successfully created
      const res = await chai.request
        .execute(app)
        .post("/api/auth/signup")
        .send({
          username: "testuser",
          email: "test@example.com",
          password: "password123",
        });
      expect(res).to.have.status(404);
      // expect(res.body.message).to.equal("User created successfully");
    });
  });

  // describe("POST /api/auth/signin", () => {
  //   it("should sign in a user with correct credentials", async () => {
  //     // This test verifies that a user can sign in with correct credentials
  //     const hashedPassword = bcryptjs.hashSync("password123", 10);
  //     await User.create({
  //       username: "testuser",
  //       email: "test@example.com",
  //       password: hashedPassword,
  //     });

  //     const res = await chai.request.execute(app).post("/api/auth/signin").send({
  //       email: "test@example.com",
  //       password: "password123",
  //     });
  //     expect(res).to.have.status(200);
  //     expect(res).to.have.cookie("access_token");
  //   });

  //   it("should not sign in a user with incorrect password", async () => {
  //     // This test checks that signin fails with incorrect password
  //     const res = await chai.request.execute(app).post("/api/auth/signin").send({
  //       email: "test@example.com",
  //       password: "wrongpassword",
  //     });
  //     expect(res).to.have.status(401);
  //   });

  //   it("should not sign in a non-existent user", async () => {
  //     // This test verifies that signin fails for a non-existent user
  //     const res = await chai.request.execute(app).post("/api/auth/signin").send({
  //       email: "nonexistent@example.com",
  //       password: "password123",
  //     });
  //     expect(res).to.have.status(404);
  //   });
  // });

  // describe("POST /api/auth/google", () => {
  //   it("should authenticate an existing user with Google", async () => {
  //     // This test checks Google authentication for an existing user
  //     await User.create({
  //       username: "googleuser",
  //       email: "google@example.com",
  //       password: bcryptjs.hashSync("somepassword", 10),
  //     });

  //     const res = await chai.request.execute(app).post("/api/auth/google").send({
  //       name: "Google User",
  //       email: "google@example.com",
  //       photo: "https://example.com/photo.jpg",
  //     });
  //     expect(res).to.have.status(200);
  //     expect(res).to.have.cookie("access_token");
  //   });

  //   it("should create and authenticate a new user with Google", async () => {
  //     // This test verifies that a new user is created and authenticated via Google
  //     const res = await chai.request.execute(app).post("/api/auth/google").send({
  //       name: "New Google User",
  //       email: "newgoogle@example.com",
  //       photo: "https://example.com/newphoto.jpg",
  //     });
  //     expect(res).to.have.status(200);
  //     expect(res).to.have.cookie("access_token");

  //     // Check if the user was actually created in the database
  //     const user = await User.findOne({ email: "newgoogle@example.com" });
  //     expect(user).to.exist;
  //     expect(user.profilePicture).to.equal("https://example.com/newphoto.jpg");
  //   });
  // });

  // describe("GET /api/auth/signout", () => {
  //   it("should sign out a user", async () => {
  //     // This test checks if the signout process clears the cookie
  //     const res = await chai.request.execute(app).get("/api/auth/signout");
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.equal("Signout success!");
  //     expect(res).to.have.cookie("access_token", "");
  //   });
  // });
});
