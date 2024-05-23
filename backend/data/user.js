import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shivani Awasthi",
    email: "shivani@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shalini Verma",
    email: "shalini@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
