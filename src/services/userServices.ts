// userServices.ts
import type { User } from "../users/user.interface";
import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "../../src/data/user.json");

const readUsersFromFile = (): User[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as User[];
};

const writeUsersToFile = (users: User[]) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export const getAllUsers = (): User[] => {
  return readUsersFromFile();
};

export const createUser = (user: User): User => {
  const users = readUsersFromFile();
  const newUser: User = {
     ...user,
    id: users.length ? users[users.length - 1].id! + 1 : 1,

  };
  users.push(newUser);
  writeUsersToFile(users);
  return newUser;
};
