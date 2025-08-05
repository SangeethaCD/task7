import { Request, Response } from "express";
import * as userService from "../services/userServices";
import type { User } from "../users/user.interface";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getUsers = (req: Request, res: Response) => {
  const users: User[] = userService.getAllUsers();
  const usersWithoutPassword = users.map(({ password, ...rest }) => rest);
  res.json(usersWithoutPassword);
};

export const createUser = (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Username, email, and password are required" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  // Pass only the user data to service, no req/res here
  const newUser = userService.createUser({ username, email, password } as User);

  res.status(201).json(newUser);
};

